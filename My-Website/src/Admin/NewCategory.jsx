// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import AdminSidebar from './AdminSidebar';
// import AdminHeader from './AdminHeader';
// import './newbanner.css';
// import Alert from 'react-bootstrap/Alert';

// const NewCategory = () => {
//   const [formData, setFormData] = useState({
//     category: '',
//     image: '',
//     subcategories: [{ name: '', image: null, file: null }],
//   });

//   const [errors, setErrors] = useState({});
//   const [imageFile, setImageFile] = useState(null);
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();

//   const editCategory = location.state?.category || null;

//   useEffect(() => {
//     if (editCategory) {
//       setFormData({
//         category: editCategory.category || '',
//         image: editCategory.image || '',
//         subcategories: editCategory.subcategories?.length
//           ? editCategory.subcategories.map(sub => ({ name: sub.name, image: sub.image, file: null }))
//           : [{ name: '', image: null, file: null }],
//       });
//     }
//   }, [editCategory]);

//   const convertToBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//     });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
//   };

//   const handleSubChange = (index, e) => {
//     const newSubs = [...formData.subcategories];
//     newSubs[index][e.target.name] = e.target.value;
//     setFormData({ ...formData, subcategories: newSubs });
//     setErrors((prev) => ({ ...prev, [`sub-${index}`]: '' }));
//   };

//   const handleSubFileChange = (index, file) => {
//     const newSubs = [...formData.subcategories];
//     newSubs[index].file = file;
//     setFormData({ ...formData, subcategories: newSubs });
//     setErrors((prev) => ({ ...prev, [`subImage-${index}`]: '' }));
//   };

//   const addSubcategory = () => {
//     setFormData({
//       ...formData,
//       subcategories: [...formData.subcategories, { name: '', image: null, file: null }],
//     });
//   };

//   const removeSubcategory = (index) => {
//     const newSubs = formData.subcategories.filter((_, i) => i !== index);
//     setFormData({ ...formData, subcategories: newSubs });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.category.trim()) newErrors.category = 'Category name is required.';
//     formData.subcategories.forEach((sub, idx) => {
//       if (!sub.name.trim()) newErrors[`sub-${idx}`] = 'Subcategory name is required.';
//       if (!sub.image && !sub.file && !editCategory) newErrors[`subImage-${idx}`] = 'Subcategory image is required.';
//     });
//     if (!formData.image && !imageFile && !editCategory) newErrors.image = 'Category image is required.';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     try {
//       // Convert main category image
//       let base64Image = editCategory?.image;
//       if (imageFile) base64Image = await convertToBase64(imageFile);

//       // Convert subcategory images
//       const finalSubcategories = await Promise.all(
//         formData.subcategories.map(async (sub) => {
//           let subImage = sub.image;
//           if (sub.file) subImage = await convertToBase64(sub.file);
//           return { name: sub.name.trim(), image: subImage };
//         })
//       );

//       const payload = {
//         category: formData.category.trim(),
//         image: base64Image,
//         subcategories: finalSubcategories,
//       };

//       const isEdit = !!editCategory;
//       const endpoint = isEdit
//         ? `http://localhost:5000/api/categories/${editCategory._id}`
//         : 'http://localhost:5000/api/categories';
//       const method = isEdit ? 'PUT' : 'POST';

//       const response = await fetch(endpoint, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error('Failed to save category');

//       const successMessage = isEdit ? 'Category updated successfully!' : 'Category created successfully!';
//       setMessage(successMessage);
//       setErrors({});

//       // Reset only for new category
//       if (!isEdit) {
//         setFormData({
//           category: '',
//           image: '',
//           subcategories: [{ name: '', image: null, file: null }],
//         });
//         setImageFile(null);

//         // Reset main category file input
//         const mainFileInput = document.getElementById('categoryFileInput');
//         if (mainFileInput) mainFileInput.value = '';

//         // Reset subcategory file inputs
//         formData.subcategories.forEach((_, idx) => {
//           const subFileInput = document.getElementById(`subFileInput-${idx}`);
//           if (subFileInput) subFileInput.value = '';
//         });
//       }

//       // Show message for 2 seconds, redirect only if edit
//       setTimeout(() => {
//         setMessage('');
//         if (isEdit) navigate('/managecategory');
//       }, 2000);

//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setMessage('Server error. Please try again later.');
//     }
//   };

//   return (
//     <>
//       <AdminHeader />
//       <AdminSidebar />
//       <div className="newbanner-container">
//         <div className="newbannerheader">
//           <h3 className="newform">{editCategory ? 'Edit Category' : 'New Category'}</h3>
//         </div>

//         <div className="banner-form-container">
//           {message && (
//             <Alert
//               style={{ border: "none", fontSize: "18px" }}
//               className="text-success text-end bg-white"
//               onClose={() => setMessage("")}
//             >
//               {message}
//             </Alert>
//           )}
//           <div className="form-box">
//             <h3>{editCategory ? 'Update Category' : 'Add Category'}</h3>
//             <form onSubmit={handleSubmit}>
//               {/* Category Name & Image */}
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Category Name</label>
//                   <input
//                     className="bannername"
//                     type="text"
//                     name="category"
//                     placeholder="Category Name"
//                     value={formData.category}
//                     onChange={handleChange}
//                   />
//                   {errors.category && <p style={{ color: 'red' }}>{errors.category}</p>}
//                 </div>

//                 <div className="form-group">
//                   <label>{editCategory ? 'Change Category Image (optional)' : 'Upload Category Image'}</label>
//                   <input
//                     id="categoryFileInput"
//                     className="mt-2"
//                     style={{ padding: '1.5%' }}
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => setImageFile(e.target.files[0])}
//                   />
//                   {errors.image && <p style={{ color: 'red' }}>{errors.image}</p>}
//                 </div>
//               </div>

//               {/* Subcategories */}
// {formData.subcategories.map((sub, idx) => (
//   <div key={idx}>
//     <div className="form-row mt-3">
//       <div className="form-group">
//         <label>Subcategory Name</label>
//         <input
//           className="bannername"
//           type="text"
//           name="name"
//           placeholder="Subcategory Name"
//           value={sub.name}
//           onChange={(e) => handleSubChange(idx, e)}
//         />
//         {errors[`sub-${idx}`] && (
//           <p style={{ color: 'red' }}>{errors[`sub-${idx}`]}</p>
//         )}
//       </div>

//       <div className="form-group">
//         <label>
//           {editCategory
//             ? 'Change Subcategory Image (optional)'
//             : 'Upload Subcategory Image'}
//         </label>
//         <input
//           id={`subFileInput-${idx}`}
//           className="mt-2"
//           style={{ padding: '1.5%' }}
//           type="file"
//           accept="image/*"
//           onChange={(e) => handleSubFileChange(idx, e.target.files[0])}
//         />
//         {errors[`subImage-${idx}`] && (
//           <p style={{ color: 'red' }}>{errors[`subImage-${idx}`]}</p>
//         )}
//       </div>

//       {sub.image && !sub.file && (
//         <div className="mt-2">
//           <p>Current Subcategory Image:</p>
//           <img
//             src={sub.image}
//             alt="Subcategory Preview"
//           />
//         </div>
//       )}
//     </div>

//     {/* Remove button outside the form-row */}
//     {formData.subcategories.length > 1 && (
//       <div className="d-flex justify-content-end ">
//       <button
//         type="button"
//         className="categoryX  "
//         onClick={() => removeSubcategory(idx)}
//       >
//         X
//       </button>
//       </div>
//     )}
//   </div>
// ))}

//               <button type="button" onClick={addSubcategory} className="mt-2 addsub">+Subcategory</button>

//               <div className="form-buttons mt-3">
//                 <button type="button" className="cancelbtn" onClick={() => {
//   if (editCategory) {
//     navigate('/managecategory');
//   } else {
//     setFormData({
//       category: '',
//       image: '',
//       subcategories: [{ name: '', image: null, file: null }],
//     });
//     setImageFile(null);
//     const fileInput = document.getElementById('categoryFileInput');
//     if (fileInput) fileInput.value = '';
//   }
// }}>
//   Cancel
// </button>

//                 <button type="submit" className="save-btn">{editCategory ? 'Update' : 'Save'}</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NewCategory;

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import './newbanner.css';
import Alert from 'react-bootstrap/Alert';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const VALID_SIZES = [{ w: 750, h: 750 },
                     { w: 256, h: 198 },
                     { w: 180, h: 180 }
]; // Only accept 750x750
const TOLERANCE = 5; // +/- tolerance in pixels

const NewCategory = () => {
  const [formData, setFormData] = useState({
    category: '',
    image: '',
    subcategories: [{ name: '', image: null, file: null }],
  });
  const [errors, setErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const editCategory = location.state?.category || null;

  useEffect(() => {
    if (editCategory) {
      setFormData({
        category: editCategory.category || '',
        image: editCategory.image || '',
        subcategories: editCategory.subcategories?.length
          ? editCategory.subcategories.map((sub) => ({
              name: sub.name,
              image: sub.image,
              file: null,
            }))
          : [{ name: '', image: null, file: null }],
      });
    }
  }, [editCategory]);

  // Convert file to base64
  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // Validate image type, size, and dimensions
  const validateImageFile = (file) =>
    new Promise((resolve) => {
      if (!file.type.startsWith('image/')) return resolve('Please upload a valid image.');
      if (file.size > MAX_FILE_SIZE) return resolve('Image must be less than 5MB.');

      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const isValid = VALID_SIZES.some(
          (size) =>
            Math.abs(size.w - img.width) <= TOLERANCE &&
            Math.abs(size.h - img.height) <= TOLERANCE
        );
        if (!isValid)
          resolve(`Image dimensions must be ${VALID_SIZES[0].w}x${VALID_SIZES[0].h}px.`);
        else resolve('');
      };
      img.onerror = () => resolve('Failed to load image.');
    });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubChange = (index, e) => {
    const newSubs = [...formData.subcategories];
    newSubs[index][e.target.name] = e.target.value;
    setFormData({ ...formData, subcategories: newSubs });
    setErrors((prev) => ({ ...prev, [`sub-${index}`]: '' }));
  };

  // Handle main category image selection
  const handleMainFileChange = async (file) => {
    if (!file) return;
    const error = await validateImageFile(file);
    if (error) {
      setErrors((prev) => ({ ...prev, image: error }));
      setImageFile(null);
    } else {
      setErrors((prev) => ({ ...prev, image: '' }));
      setImageFile(file);
    }
  };

  // Handle subcategory image selection
  const handleSubFileChange = async (index, file) => {
    if (!file) return;
    const error = await validateImageFile(file);
    const newSubs = [...formData.subcategories];
    if (error) {
      setErrors((prev) => ({ ...prev, [`subImage-${index}`]: error }));
      newSubs[index].file = null;
    } else {
      setErrors((prev) => ({ ...prev, [`subImage-${index}`]: '' }));
      newSubs[index].file = file;
    }
    setFormData({ ...formData, subcategories: newSubs });
  };

  const addSubcategory = () => {
    setFormData({
      ...formData,
      subcategories: [
        ...formData.subcategories,
        { name: '', image: null, file: null },
      ],
    });
  };

  const removeSubcategory = (index) => {
    const newSubs = formData.subcategories.filter((_, i) => i !== index);
    setFormData({ ...formData, subcategories: newSubs });
    setErrors((prev) => {
      const newErr = { ...prev };
      delete newErr[`sub-${index}`];
      delete newErr[`subImage-${index}`];
      return newErr;
    });
  };

  const validateForm = async () => {
    const newErrors = {};

    if (!formData.category.trim()) newErrors.category = 'Category name is required.';
    if (!formData.image && !imageFile && !editCategory) newErrors.image = 'Category image is required.';

    for (let idx = 0; idx < formData.subcategories.length; idx++) {
      const sub = formData.subcategories[idx];
      if (!sub.name.trim()) newErrors[`sub-${idx}`] = 'Subcategory name is required.';
      if (!sub.image && !sub.file && !editCategory) newErrors[`subImage-${idx}`] = 'Subcategory image is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(await validateForm())) return;

    try {
      let base64Image = editCategory?.image;
      if (imageFile) base64Image = await convertToBase64(imageFile);

      const finalSubcategories = await Promise.all(
        formData.subcategories.map(async (sub) => {
          let subImage = sub.image;
          if (sub.file) subImage = await convertToBase64(sub.file);
          return { name: sub.name.trim(), image: subImage };
        })
      );

      const payload = {
        category: formData.category.trim(),
        image: base64Image,
        subcategories: finalSubcategories,
      };

      const isEdit = !!editCategory;
      const endpoint = isEdit
        ? `http://localhost:5000/api/categories/${editCategory._id}`
        : 'http://localhost:5000/api/categories';
      const method = isEdit ? 'PUT' : 'POST';

      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Failed to save category');

      setMessage(isEdit ? 'Category updated successfully!' : 'Category created successfully!');
      setErrors({});

      if (!isEdit) {
        setFormData({
          category: '',
          image: '',
          subcategories: [{ name: '', image: null, file: null }],
        });
        setImageFile(null);
        const mainFileInput = document.getElementById('categoryFileInput');
        if (mainFileInput) mainFileInput.value = '';
        formData.subcategories.forEach((_, idx) => {
          const subFileInput = document.getElementById(`subFileInput-${idx}`);
          if (subFileInput) subFileInput.value = '';
        });
      }

      setTimeout(() => {
        setMessage('');
        if (isEdit) navigate('/managecategory');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Server error. Please try again later.');
    }
  };

  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className="newbanner-container">
        <div className="newbannerheader">
          <h3 className="newform">{editCategory ? 'Edit Category' : 'New Category'}</h3>
        </div>

        <div className="banner-form-container">
          {message && (
            <Alert style={{ border: 'none', fontSize: '18px' }} className="text-success text-end bg-white" onClose={() => setMessage('')}>
              {message}
            </Alert>
          )}

          <div className="form-box">
            <h3>{editCategory ? 'Update Category' : 'Add Category'}</h3>
            <form onSubmit={handleSubmit}>
              {/* Category Name & Image */}
              <div className="form-row">
                <div className="form-group">
                  <label>Category Name</label>
                  <input
                    className="bannername"
                    type="text"
                    name="category"
                    placeholder="Category Name"
                    value={formData.category}
                    onChange={handleChange}
                  />
                  {errors.category && <p style={{ color: 'red' }}>{errors.category}</p>}
                </div>

                <div className="form-group">
                  <label>{editCategory ? 'Change Category Image (optional)' : 'Upload Category Image'}</label>
                  <input
                    id="categoryFileInput"
                    className="mt-2"
                    style={{ padding: '1.5%' }}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleMainFileChange(e.target.files[0])}
                  />
                  {errors.image && <p style={{ color: 'red' }}>{errors.image}</p>}
                </div>
              </div>

              {/* Subcategories */}
              {formData.subcategories.map((sub, idx) => (
                <div key={idx}>
                  <div className="form-row mt-3">
                    <div className="form-group">
                      <label>Subcategory Name</label>
                      <input
                        className="bannername"
                        type="text"
                        name="name"
                        placeholder="Subcategory Name"
                        value={sub.name}
                        onChange={(e) => handleSubChange(idx, e)}
                      />
                      {errors[`sub-${idx}`] && <p style={{ color: 'red' }}>{errors[`sub-${idx}`]}</p>}
                    </div>

                    <div className="form-group">
                      <label>{editCategory ? 'Change Subcategory Image (optional)' : 'Upload Subcategory Image'}</label>
                      <input
                        id={`subFileInput-${idx}`}
                        className="mt-2"
                        style={{ padding: '1.5%' }}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleSubFileChange(idx, e.target.files[0])}
                      />
                      {errors[`subImage-${idx}`] && <p style={{ color: 'red' }}>{errors[`subImage-${idx}`]}</p>}
                    </div>

                    {sub.image && !sub.file && (
                      <div className="mt-2">
                        <p>Current Subcategory Image:</p>
                        <img src={sub.image} alt="Subcategory Preview" />
                      </div>
                    )}
                  </div>

                  {formData.subcategories.length > 1 && (
                    <div className="d-flex justify-content-end">
                      <button type="button" className="categoryX" onClick={() => removeSubcategory(idx)}>
                        X
                      </button>
                    </div>
                  )}
                </div>
              ))}

              <button type="button" onClick={addSubcategory} className="mt-2 addsub">
                + Subcategory
              </button>

              <div className="form-buttons mt-3">
                <button type="button" className="cancelbtn" onClick={() => {
                  if (editCategory) navigate('/managecategory');
                  else {
                    setFormData({ category: '', image: '', subcategories: [{ name: '', image: null, file: null }] });
                    setImageFile(null);
                    const fileInput = document.getElementById('categoryFileInput');
                    if (fileInput) fileInput.value = '';
                  }
                }}>
                  Cancel
                </button>
                <button type="submit" className="save-btn">{editCategory ? 'Update' : 'Save'}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCategory;
