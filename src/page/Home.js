import React from 'react'

const Home = () => {
  return (
    <>
    {/* section 02 */}
        <section className="overflow-hidden h-60vh relative bg-dark">
          {/* desktop */}
          <div className="hidden md:block">
            <div className="max-w-full">
                <img class="img-fluid position-absolute" src={require("../images/Shinnosuke11.png")} alt=""/>
            </div>
            <h1 class="position-absolute display-5">
              <b>為了您，<br/>&nbsp;&nbsp;&nbsp;打造精彩的甜食饗宴</b>
            </h1>
            <div class="mask position-absolute text-center row justify-content-around">
              <p class="align-self-end mb-4">我們不得不面對一個非常尷尬的事實，<br/>那就是，對於甜點，<br/>我們不能不去想，卻也不能走火入魔。<br/>我們要學會站在別人的角度思考。</p>
              <div class="btn-wrap">
                <a type="button" class="h5 to-peoduct-list-btn text-decoration-none text-white px-4 py-2" href="#/">前往商品列表</a>
              </div>
            </div>
          </div>

          {/* mobile */}
          <div class="mobile d-md-none">
            <div class="homepage-section-2-imgclip mw-100">
              <img class="img-fluid position-absolute" src="./images/image 3.png" alt=""/>
          </div>
          <div class="mask position-absolute text-center row align-content-center">
            <h1 class="display-5">
              <b>為了您，<br/>打造精彩的甜食饗宴</b>
            </h1>
            <p class="mt-4">我們不得不面對一個非常尷尬的事實，<br/>那就是，對於甜點，<br/>我們不能不去想，卻也不能走火入魔。<br/>我們要學會站在別人的角度思考。</p>
            <div class="btn-wrap">
              <a type="button" class="h5 to-peoduct-list-btn text-decoration-none text-white px-4 py-2" href="#/">前往商品列表</a>
            </div>
          </div>
          </div>
        </section>

      {/* section 03 */}
      <section class="homepage-section-3 container px-0">
        <div class="homepage-card-wrap row justify-content-around gy-5">

          <div class="card p-0 col-md-3 mx-3">
            <img src="./images/Rectangle 5.png" class="card-img-top" alt="..."/>
            <div class="card-body text-center">
              <h5 class="card-title">我們不得不面對一個</h5>
              <p class="card-text">我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實</p>
              <a href="#/" class="btn">我們不得不</a>
            </div>
          </div>

          <div class="card p-0 col-md-3 mx-3">
            <img src="./images/Rectangle 6.png" class="card-img-top" alt="..."/>
            <div class="card-body text-center">
              <h5 class="card-title">我們不得不面對一個</h5>
              <p class="card-text">我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實</p>
              <a href="#/" class="btn">我們不得不</a>
            </div>
          </div>

          <div class="card p-0 col-md-3 mx-3">
            <img src="./images/Rectangle 7.png" class="card-img-top" alt="..."/>
            <div class="card-body text-center">
              <h5 class="card-title">我們不得不面對一個</h5>
              <p class="card-text">我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實我們不得不面對一個非常尷尬的事實</p>
              <a href="#/" class="btn">我們不得不</a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Home