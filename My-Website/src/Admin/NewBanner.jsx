import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BannerContext } from "./BannerContext";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import Alert from "react-bootstrap/Alert";
import "./newbanner.css";
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const VALID_SIZES = [
  { w: 1080, h: 48 },
  { w: 2160, h: 96 },
  { w: 2160, h: 480 },
  { w: 2250, h: 100 },
  { w: 2880, h: 640 },
  { w: 3240, h: 144 },
  { w: 4500, h: 200 },
];
const TOLERANCE = 10;
const NewBanner = () => {
  const [message, setMessage] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [bannerType, setBannerType] = useState("");
  const [errors, setErrors] = useState({});
  const { fetchBanners } = useContext(BannerContext);
  const navigate = useNavigate();
  const location = useLocation();
  const editBanner = location.state?.banner;
  useEffect(() => {
    if (editBanner) {
      setImageName(editBanner.name);
      setBannerType(editBanner.type);
    }
  }, [editBanner]);
  // ---------------- validation ----------------
  const validate = () => {
    const newErrors = {};
    if (!imageName.trim()) newErrors.imageName = "Please enter banner name.";
    if (!bannerType) newErrors.bannerType = "Please select banner type.";
    if (!editBanner && !imageFile)
      newErrors.imageFile = "Please upload a banner image.";
    if (imageFile) {
      if (!imageFile.type.startsWith("image/"))
        newErrors.imageFile = "Please upload a valid image.";
      if (imageFile.size > MAX_FILE_SIZE)
        newErrors.imageFile = "Image must be < 5MB.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // ---------------- image change ----------------
  const handleImageChange = (file) => {
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({
        ...prev,
        imageFile: "Image file size exceeds 5MB.",
      }));
      setImageFile(null);
      return;
    }
    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({
        ...prev,
        imageFile: "Please upload a valid image file.",
      }));
      setImageFile(null);
      return;
    }
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const width = img.width;
      const height = img.height;
      const isValid = VALID_SIZES.some(
        (s) =>
          Math.abs(width - s.w) <= TOLERANCE &&
          Math.abs(height - s.h) <= TOLERANCE
      );
      if (!isValid) {
        setErrors((prev) => ({
          ...prev,
          imageFile: "Image dimensions are not valid.",
        }));
        setImageFile(null);
      } else {
        setErrors((prev) => {
          const { imageFile, ...rest } = prev;
          return rest;
        });
        setImageFile(file);
      }

      URL.revokeObjectURL(img.src);
    };
  };
  // ---------------- submit ----------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      let formData = {
        name: imageName,
        type: bannerType,
      };
      // If new image uploaded
      if (imageFile) {
        const reader = new FileReader();
        const filePromise = new Promise((resolve) => {
          reader.onloadend = () => resolve(reader.result);
        });
        reader.readAsDataURL(imageFile);
        formData.image = await filePromise;
      } else if (editBanner) {
        // keep old image if editing and no new image chosen
        formData.image = editBanner.image;
      }
      let res;
      if (editBanner?._id) {
        // Editing existing banner
        res = await fetch(`http://localhost:5000/api/banner/${editBanner._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } else {
        // Creating new banner
        res = await fetch("http://localhost:5000/api/banner", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
      if (!res.ok) throw new Error("Failed to save banner");
      const data = await res.json();
      console.log("Banner saved:", data);
      setMessage(editBanner ? "Banner updated successfully!" : "Banner created successfully!");
      fetchBanners();
      if (editBanner) {
        // After update → redirect
        setTimeout(() => {
          navigate("/managebanner");
        }, 1500);
      } else {
        // After create → reset form
        setImageName("");
        setBannerType("");
        setImageFile(null);
        const fileInput = document.getElementById("bannerFileInput");
        if (fileInput) fileInput.value = "";
        setTimeout(() => setMessage(""), 2000);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };
  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className="newbanner-container">
        <div className="newbannerheader">
          <h3 className="newform">
            {editBanner ? "Edit Banner" : "New Banner"}
          </h3>
        </div>
        <div className="banner-form-container">
          {message && (
            <Alert
              style={{ border: "none", fontSize: "18px" }}
              className="text-success text-end bg-white"
              onClose={() => setMessage("")}
            >
              {message}
            </Alert>
          )}
          <div className="form-box">
            <h3>{editBanner ? "Update Banner" : "Add Banner"}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                {/* Banner Name */}
                <div className="form-group">
                  <label>Banner Name</label>
                  <input
                    className={`bannername ${errors.imageName ? "input-error" : ""}`}
                    type="text"
                    placeholder="Banner Name"
                    value={imageName}
                    onChange={(e) => setImageName(e.target.value)}
                  />
                  {errors.imageName && (
                    <small className="error-text">{errors.imageName}</small>
                  )}
                </div>
                {/* Banner Type */}
                <div className="form-group mt-2">
                  <label>Banner Type</label>
                  <select
                    style={{ padding: "2.5%" }}
                    className={`bannerselect ${errors.bannerType ? "input-error" : ""}`}
                    value={bannerType}
                    onChange={(e) => setBannerType(e.target.value)}
                  >
                    <option value="">-- Select Type --</option>
                    <option value="home">Home Banner</option>
                    <option value="category">Category Banner</option>
                  </select>
                  {errors.bannerType && (
                    <small className="error-text">{errors.bannerType}</small>
                  )}
                </div>
              </div>
              {/* Image Upload */}
              <div className="form-row">
                <div className="form-group">
                  <label>
                    {editBanner
                      ? "Change Banner Image (optional)"
                      : "Upload Banner Image"}
                  </label>
                  <input
                    id="bannerFileInput"
                    className={`bannerimage ${errors.imageFile ? "input-error" : ""}`}
                    type="file"
                    style={{ width: "49%", padding: "1%" }}
                    accept="image/*"
                    onChange={(e) => handleImageChange(e.target.files[0])}
                  />
                  {errors.imageFile && (
                    <small className="error-text">{errors.imageFile}</small>
                  )}
                </div>
              </div>
              {/* Current Image Preview in Edit */}
              {editBanner && !imageFile && (
                <div className="mt-3">
                  <p>Current Image:</p>
                  <img
                    src={editBanner.image}
                    alt="Banner Preview"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
              )}
              <div className="form-buttons">
                <button
                  type="button"
                  className="cancelbtn"
                  onClick={() => {
                    if (editBanner) {
                      navigate("/managebanner");
                    } else {
                      setImageName("");
                      setBannerType("");
                      setImageFile(null);
                      const fileInput = document.getElementById("bannerFileInput");
                      if (fileInput) fileInput.value = "";
                    }
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  {editBanner ? "Update" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        .input-error { border-color: red; }
        .error-text { color: red; font-size: 0.85em; margin-top: 4px; display: block; }
      `}</style>
    </>
  );
};
export default NewBanner;


