import { Link } from "react-router-dom";
import { useState, useEffect} from "react"
import Swal from "sweetalert2";
import {db} from "../../firebase-config";
import { collection, getDocs, addDoc, updateDoc, setDoc, doc, deleteDoc } from "firebase/firestore"

export default function Admin(){

    const [ products, setProducts ] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const productCollectionRef = collection(db, "product")

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedImage, setSelectedImage] = useState("/images/ph.webp");

    const [updatedName, setUpdatedName] = useState("");
    const [updatedDescription, setUpdatedDescription] = useState("");
    const [updatedSelectedImage, setUpdatedSelectedImage] = useState("/images/ph.webp");

    const getProducts = async () => {
        const data = await getDocs(productCollectionRef)
        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        console.log(products)
    }

    const addProduct = async () => {
        await addDoc(productCollectionRef, {name: name, description:description, image:selectedImage})
    }

        const updateProduct = async (id, product) => {
          const productRef = doc(collection(db, "product"), id);
          const newValue = {
            name: product.name,
            description: product.description,
            image: product.image
          };
          await updateDoc(productRef, newValue)
          .then(() => {
            console.log(`${id} has been updated successfully.`);
          })
          .catch(error => {
            console.log(`You have encountered this error: ${error}`);
          });;
        }


    const deleteProduct = async (id) => {
      const productRef = doc(collection(db, "product"), id); // Assuming "db" is a valid reference to your Firestore instance
      await deleteDoc(productRef)
        .then(() => {
          console.log(`${id} has been deleted successfully.`);
        })
        .catch(error => {
          console.log(`You have encountered this error: ${error}`);
        });
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleUpdateClose = () => {
        setIsOpen(false)
    }

    const handleUpdateOpen = () => {
        setIsOpen(true)
    }




    const handleImageSelect = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        if (reader.readyState === 2) {
          setSelectedImage(reader.result);
        }
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    };

    const handleUpdatedImageSelect = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = () => {
          if (reader.readyState === 2) {
            setUpdatedSelectedImage(reader.result);
          }
        };
    
        if (file) {
          reader.readAsDataURL(file);
        }
      };


    useEffect(() => {
        getProducts()
    },[])

    return(
        <div className="max-w-[1300px] mx-auto">
   <div className="flex overflow-hidden bg-white ">
      <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
      <div id="main-content" className="flex flex-col h-full w-full bg-gray-50 relative overflow-y-auto ">

        { products.length == 0 ? (
          <>
            <div class="flex justify-center items-center h-full pt-32">
              <img class="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
            </div>  
            <div className="text-center">
              Loading Products ...  
            </div>        
          </>
        ):(
          <>
          <div className="flex gap-4 justify-end">
          <button onClick={handleOpen} className="py-4  bg-secondary-light4 w-36 self-end text-center pl-4 text-white rounded-lg m-2 flex ">
          Add product
      </button>
      <Link to="/" onClick={handleOpen} className="py-4  bg-secondary-light4 pr-3 self-end text-center pl-4 text-white rounded-lg m-2 flex ">
          Logout
      </Link>
          </div>
          <main>

          <table className="w-full sm:w-full">
               <thead>
                 <tr className="text-xs font-semibold tracking-wide text-left text-gray-dark1 uppercase border-b  bg-gray-light3 ">
                   <th className="px-4 py-3">Image</th>
                   <th className="py-3 pr-4">Product Name</th>
                   <th className="px-4 py-4">Actions</th>
                   <th></th>
                 </tr>
               </thead>
               <tbody className="bg-white divide-y">
                 {products.map((doctor, index) => (
                  
                  <>
                          <>
         {isUpdateOpen && 
             <div>
                 <div class=" fixed inset-0 w-full h-full py-32 bg-gray-dark1 bg-opacity-50 transition duration-150 ease-in-out z-10 " >
                 <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                     <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                         <div class="w-full flex justify-start text-gray-600 mb-3">
                             <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                 <path stroke="none" d="M0 0h24v24H0z" />
                                 <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                 <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                             </svg>
                         </div>
                         <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Product Information</h1>
                         <label for="name" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Product Name</label>
                         <input value={doctor.name} onChange={(e) => setUpdatedName(e.target.value)} id="name" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Enter product name" />
 
                         <label for="expiry" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Enter Description</label>
                         <textarea value={doctor.description} onChange={(e) => setUpdatedDescription(e.target.value)}  name="" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-20 flex items-center pl-3 text-sm border-gray-300 rounded border"  />
                         <label for="cvc" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Select Image</label>
                         <input
                             type="file"
                             accept="image/*"
                             value={doctor.image}
                             onChange={handleImageSelect}
                             className="hidden"
                             id="image-upload"
                         />
                         <label htmlFor="image-upload" className="mb-4 cursor-pointer ">
                             <img
                             src={selectedImage}
                             alt="Selected"
                             className="mx-auto h-48 object-cover"
                             />
                         </label>
                         <div class="flex items-center justify-between w-full pt-4">
                             <button onClick={handleUpdateClose} class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-warning-dark1 ml-3 bg-warning-dark1 transition duration-150 text-white ease-in-out hover:border-gray-400 hover:bg-warning-dark2 border rounded px-8 py-2 text-sm" onclick="modalHandler()">Cancel</button>
                             <button 
                               onClick={async () => {

                                await updateProduct(doctor.id, { name: updatedName, description: updatedDescription, image: updatedSelectedImage })
                                handleUpdateClose()
                               }}
                               class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-secondary-dark2 bg-secondary-dark1 rounded text-white px-8 py-2 text-sm">Save</button>
                         </div>
                         <button onClick={handleUpdateClose} class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onclick="modalHandler()" aria-label="close modal" role="button">
                             <svg  xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                 <path stroke="none" d="M0 0h24v24H0z" />
                                 <line x1="18" y1="6" x2="6" y2="18" />
                                 <line x1="6" y1="6" x2="18" y2="18" />
                             </svg>
                         </button>
                     </div>
                 </div>
             </div>
             </div>
         }
         </>
                   <tr
                     key={index}
                     className="text-gray-dark3 bg-gray-light2 dark:bg-gray-800 hover:bg-gray-light1 "
                   >
                     <td className="px-4 py-3">
                       <div className="flex items-center text-sm">
                         <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                           <img
                             className="w-full h-full rounded-full "
                             // src={`images/${doctor.image}`}
                             src={doctor.image}
                             alt=""
                             loading="lazy"
                           />
                           <div
                             className="absolute inset-0 rounded-full shadow-inner"
                             aria-hidden="true"
                           ></div>
                         </div>
                       </div>
                     </td>
                     <td className="px-4 py-3 text-sm">
                       {doctor.name}
                     </td>
                     <td className="px-2 py-3">
                       <div className="flex gap-16 items-center space-x-3">
                         <button
                         onClick= {async () => {
                             await setUpdatedName(doctor.name)
                             await setUpdatedDescription(doctor.description)
                             // handleUpdatedImageSelect()
                            await handleUpdateOpen()
 
                         }}
                           title="Edit"
                           className="hover:text-black"
                         >
                           <svg
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke-width="1.5"
                             stroke="currentColor"
                             className="w-5 h-5"
                           >
                             <path
                               stroke-linecap="round"
                               stroke-linejoin="round"
                               d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                             />
                           </svg>
                         </button>
                         <button
                           className="w-5 h-5"
                           x-data="{ tooltip: 'Delete' }"
                           href="#"
                           title="Delete"
                           onClick={() => {
                             Swal.fire({
                               title: "Are you sure?",
                               text: "You won't be able to revert this!",
                               icon: "warning",
                               showCancelButton: true,
                               confirmButtonColor: "#3085d6",
                               cancelButtonColor: "#d33",
                               confirmButtonText: "Yes, delete it!",
                             }).then((result) => {
                               if (result.isConfirmed) {
                                 deleteProduct(doctor.id)
                                 Swal.fire(
                                   "Deleted!",
                                   "The product has been deleted.",
                                   "success"
                                 );
                               }
                             });
                           }}
                         >
                           <svg
                             xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke-width="1.5"
                             stroke="currentColor"
                             className="w-6 h-6"
                             x-tooltip="tooltip"
                           >
                             <path
                               stroke-linecap="round"
                               stroke-linejoin="round"
                               d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                             />
                           </svg>
                         </button>
                         <Link
                           to={`/adminDashbord/doctor/${doctor.id}`}
                           className="text-blue-500 hover:text-blue-200"
                         >
                           Detail
                         </Link>
                       </div>
                     </td>
                   </tr>
   
                   </> 
                 ) 
                 )}
               </tbody>
             </table>
          </main></>
        )}
      </div>
   </div>
   {
        <>
        {isOpen && 
            <div>
                <div class=" fixed inset-0 w-full h-full py-32 bg-gray-dark1 bg-opacity-50 transition duration-150 ease-in-out z-10 " >
                <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                        <div class="w-full flex justify-start text-gray-600 mb-3">
                            <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                            </svg>
                        </div>
                        <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Product Information</h1>
                        <label for="name" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Product Name</label>
                        <input onChange={(e) => setName(e.target.value)} id="name" class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Enter product name" />

                        <label for="expiry" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Enter Description</label>
                        <textarea onChange={(e) => setDescription(e.target.value)}  name="" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-20 flex items-center pl-3 text-sm border-gray-300 rounded border"  />
                        <label for="cvc" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Select Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageSelect}
                            className="hidden"
                            id="image-upload"
                        />
                        <label htmlFor="image-upload" className="mb-4 cursor-pointer ">
                            <img
                            src={selectedImage}
                            alt="Selected"
                            className="mx-auto h-48 object-cover"
                            />
                        </label>
                        <div class="flex items-center justify-between w-full pt-4">
                            <button onClick={handleClose} class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-warning-dark1 ml-3 bg-warning-dark1 transition duration-150 text-white ease-in-out hover:border-gray-400 hover:bg-warning-dark2 border rounded px-8 py-2 text-sm" onclick="modalHandler()">Cancel</button>
                            <button onClick={addProduct} class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-secondary-dark2 bg-secondary-dark1 rounded text-white px-8 py-2 text-sm">Save</button>
                        </div>
                        <button onClick={handleClose} class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onclick="modalHandler()" aria-label="close modal" role="button">
                            <svg  xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        }
        </>
   }

{

   }
   <script async defer src="https://buttons.github.io/buttons.js"></script>
   <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
</div>
    )
}