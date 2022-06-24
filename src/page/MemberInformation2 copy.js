import {useState} from "react";
import axios from "axios";



const MemberInformation2 () => {
    const [] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
      })

    function handleChange(e) {
        set
    }
  return (
    <>
      <div className="px-2">
        <h2 className="h2 py-2 border-b-2 border-line">我的檔案</h2>
          <div className="flex mt-10 justify-around mx-1">
            <form 
                method="POST"
                action="#"
                >
                <div className="md:flex md:items-center mb-2">
                    <div className="md:w-1/4">
                        <label className="block mb-1 md:mb-0 pr-4" for="inline-full-name">
                            暱稱
                        </label>
                    </div>
                    <div className="mx-4">
                        <Input 
                        variant="standard" 
                        color="brown" 
                        placeholder="" 
                        type="text" 
                        required 
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-2">
                    <div className="md:w-1/4">
                        <label className="block mb-1 md:mb-0 pr-4" for="inline-full-name">
                            姓名
                        </label>
                    </div>
                    <div className="mx-4">
                    <Input variant="standard" color="brown" placeholder="" type="text" required />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-2">
                    <div className="md:w-1/4">
                        <label className="block mb-1 md:mb-0 pr-4" for="inline-full-name">
                            E-mail
                        </label>
                    </div>
                    <div className="mx-4">
                        <Input variant="standard" color="brown" type="email" placeholder="" required />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-2">
                    <div className="md:w-1/4">
                        <label className="block mb-1 md:mb-0 " for="inline-full-name">
                            手機號碼
                        </label>
                    </div>
                    <div className="mx-4">
                        <Input variant="standard" color="brown" type="tel"  placeholder="" />
                    </div>
                </div>
                
                <div className="md:flex md:items-center">
                    <div className="md:w-1/4">
                        <label className="block mb-1 md:mb-0" for="inline-full-name">
                            生日
                        </label>
                    </div>
                    <div className="mx-4">
                        <Input variant="standard" color="brown" placeholder="" />
                    </div>
                </div>
                <div className="mt-8">
                    <Button className="flex mx-auto" color="brown" type="submit">
                        儲存設定
                    </Button>
                </div>
            </form>
            {/* 桌機板中間的桿桿 */}
            <div className="hidden border border-line md:block"></div>
            {/* 桌機版使用者圖片 */}
            <div className="hidden md:block">
              <div>
                <img
                  className="mx-auto"
                  src={process.env.PUBLIC_URL + "/images/memberCollectionAndOrder/user_pic.png"}
                  alt=""
                />
                </div>
                <div className="text-center p">
                  <Button size="sm" className="mt-4 bg-white border blorder-line px-1">
                    <span className="text-dark">選擇圖片</span>
                  </Button>
                  <p className="mt-4 note">檔案大小：最大3MB</p>
                  <p className="note">檔案格式：JPG, PNG</p>
                </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default MemberInformation2;
