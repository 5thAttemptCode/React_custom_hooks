import { useLayoutEffect, useState } from 'react'


export function useBodyScrollLock(active) {

  const originalStyle = window.getComputedStyle(document.body).overflow

  useLayoutEffect(
    () => {
      if (active) {
        document.body.style.overflow = 'hidden'
      }

      return () => {
        document.body.style.overflow = originalStyle
      }
    }, [active] 
  )
}



// export default function App() {

//   const [ modalOpen, setModalOpen ] = useState(false)

//   useBodyScrollLock(modalOpen)

//   return (
//     <>
//       <button onClick={() => setModalOpen(true)}>Open Modal</button>
//       {modalOpen && (
//         <div className="modal">
//           <button onClick={() => setModalOpen(false)}>Close Modal</button>
//         </div>
//       )}
//     </>
//   )
// }