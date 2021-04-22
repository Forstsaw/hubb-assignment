import Head from 'next/head'

export const getStaticProps = async ()=>{
  const res = await fetch('https://hubb-server.herokuapp.com/test-product');
  const data = await res.json();

  const res2 = await fetch('https://hubb-server.herokuapp.com/test-link');
  const data2 = await res2.json();

  return {
    props: {data: data, datas2:data2}
  }
}

const Home = ({data, datas2}) => {
  return (
    <div className="px-8 mt-10">
      <Head>
        <title>Hubb Assignment</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
      </Head>

      
      <body className="bg-yellow-300">
        {/* Start your code here */}
        <div className="mx-auto grid justify-items-center">
          <img className="rounded-full h-24 w-24 flex items-center justify-center" src="/images/dp.jpg" alt='profile picture'></img>
         

          <div class="px-3 py-3 text-sm leading-5 text-black-500">
              <i class="fab fa-instagram text-xl align-middle"></i>
              <span className="text-black font-semibold text-lg"> @hubb.link</span>
          </div>
          
          
          <div  className="relative p-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 md:px-96">
            {data && data.map(data2 => (
              <div key={data2.id} class="rounded overflow-hidden shadow-lg bg-white ">
                <img className="w-full px-3 py-3 max-h-32 md:max-h-64" src={data2.product_img} alt={data2.product_title}></img>
                <div className="px-4 py-4">
                  <div className="font-bold text-base mb-2">{data2.product_title}</div>
                </div>
                
                <div className="px-4 pt-4 pb-2">
                  <h1 className="px-1 py-1 text-black text-base text-lg font-semibold mr-2 mb-2">Rp.{data2.product_price}</h1>
                  <a className="inline-block w-11/12 text-center bg-yellow-300 rounded-lg px-3 py-1 text-xs font-bold text-gray-700 mr-2 mb-2 hover:bg-blue-500 hover:text-white" href={data2.product_url}>Lihat Produk</a>
                </div>
              </div>
            ))}
          </div>

        {datas2 && datas2.map(data3 => (
        <div className="container my-3 mx-auto px-4 md:px-12">
          <div key={data3.id} className="flex items-center">
            <a className="bg-white w-full hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 rounded-lg text-center" href={data3.product_url}>
              {data3.link_title}
            </a>
          </div>
        </div>
        ))}


      </div>
    </body>
  </div>
  )
}

export default Home;