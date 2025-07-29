// Adds an artificial delay before dynamically importing a component, 
// with a live countdown in the console to simulate and measure route transition time.

// export const delayTime = 5000;

// export function delayImport(factory, delay = delayTime) {
//   let seconds = delay / 1000;
//   const interval = setInterval(() => {
//     console.log(`Routing delay: ${seconds} second${seconds > 1 ? 's' : ''} remaining...`);
//     seconds--;
//   }, 1000);

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       clearInterval(interval);
//       console.log('Routing delay complete. Loading component...');
//       resolve(factory());
//     }, delay);
//   });
// }


// update App.js - 
// const Blogs = lazy(() => delayImport(() => import('./pages/Blogs'), 10000)); // 10s delay

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Suspense fallback={null}> {/* You can show a loader here if needed */}
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="blogs" element={<Blogs />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="*" element={<NoPage />} />
//           </Route>
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }