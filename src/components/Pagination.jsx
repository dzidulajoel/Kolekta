import React from 'react'

function Pagination() {
  return (
    <>
                          <div className="w-full flex justify-center items-center mt-4 gap-2">
                        <button className="flex justify-start items-center gap-2 text-sm text-white bg-accent p-2 rounded-sm h-8"> Précédent</button>
                        <button className="flex justify-start items-center gap-2 text-sm text-black bg-gris p-2 rounded-sm h-8"> 1</button>
                        <button className="flex justify-start items-center gap-2 text-sm text-black bg-gris p-2 rounded-sm h-8"> 2</button>
                        <button className="flex justify-start items-center gap-2 text-sm text-black bg-gris p-2 rounded-sm h-8"> 3</button>
                        <button className="flex justify-start items-center gap-2 text-sm text-black bg-gris p-2 rounded-sm h-8"> ...</button>
                        <button className="flex justify-start items-center gap-2 text-sm text-black bg-gris p-2 rounded-sm h-8"> Suivant</button>

                    </div>
    </>
  )
}

export default Pagination
