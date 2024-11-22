
import "./App.css"
const App = () => {
  return (
    <div>
      {/* //md prefix utility */}
      <section className="grid gap-7 md:grid-cols-3 md:items-center md:justify-center md:text-left">
      {/* <section className=" m-0 h-screen flex justify-center items-center text-center bg-twitter-blue text-2xl p-12 md:p-14 lg:p-16 xl:pp-20 "> */}
        <div>
          <img src="https://png.pngtree.com/background/20230520/original/pngtree-modern-office-desk-design-ideas-picture-image_2677246.jpg" alt="" />
        </div>
        <div>
          <h1 className="font-bold  text-3xl mb-2">Headline</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            dolores maxime hic delectus fugiat accusamus fuga aperiam sint ex
            nisi molestiae accusantium vero, alias rerum ut amet est ullam sequi.
          </p>
        </div>
        {/* <div className="card">This is my card</div> */}
      </section>
    </div>
  )
}

export default App

// const App = () => {
//   return (
//     <div>
//       <div className="card">This is my card</div>
//     </div>
//   )
// }

// export default App