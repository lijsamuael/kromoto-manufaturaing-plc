import {useState, useEffect} from "react"


export default function AddProductModal({isOpen, handleClose, addProduct}){

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedImage, setSelectedImage] = useState("/images/ph.webp");


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


    useEffect(() => {
        console.log(name, description, selectedImage)

    }, [name])


    return(
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
                            <button onClick={() => addProduct(name, description, selectedImage)} class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-secondary-dark2 bg-secondary-dark1 rounded text-white px-8 py-2 text-sm">Save</button>
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
    )
}