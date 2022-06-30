import {useState} from "react";
import axios from "axios";
import {Input,Button} from "@material-tailwind/react";
import { API_URL } from "../utils/config";

const MemberInformation = () => {
    const [member, setMember] =useState({
        nickname:'',
        nmae:'',
        email:'',
        phone:'',
        photo:'',
    });

    function handleChange(e){
    setMember({...member, [e.targer.name]: e.targer.value});
    }

    function handlePhoto(e) {
        setMember({...member, photo: e.targer.files[0]});
    }

    async function hadleSubmit(e) {
        e.preventDefaulte();
        try {
            let formDate = new FormData();
            formDate.append('nickname', member.nickname);
            formDate.append('name', member.name);
            formDate.append('email', member.email);
            formDate.append('phohe', member.phone);
            formDate.append('photo', member.photo);
            let response = axios.post(`${API_URL/MemberInformation, formDate}`);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div className="flex flex-nowrap h-full">
            {/* Sidebar starts */}
            {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
            <div className="w-64 md:h-full flex-col justify-between hidden sm:flex md:block">
                <div className="px-8">
                    <div className="h-16 w-full flex items-center mt-10">
                        <img
                            className="mx-auto"
                            src={process.env.PUBLIC_URL + "/images/memberInformation/user_small.png"}
                            alt=""
                            />
                        </div>
                    <ul className="mt-14">
                        <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                            <butto className="flex mx-auto p">我的帳戶</butto>                            
                        </li>
                        <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                            <butto className="flex mx-auto p">訂單查詢</butto>
                        </li>
                        <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                            <butto className="flex mx-auto p">蒐藏清單</butto>
                        </li>
                    </ul>                 
                </div>
            </div>
            {/* Sidebar ends */}
            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="container mx-auto h-full md:w-4/5 w-11/12 px-6">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                <div className="w-full h-full rounded border-gray-300">
                    {/* Place your content here */}
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
                                            id="nickname" 
                                            name="nickname"
                                            variant="standard" 
                                            color="brow" 
                                            placeholder
                                            type="text" 
                                            required
                                            value={member.nickname}
                                            onChange={handleChange}
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
                                    <Input 
                                        variant="standard"
                                        color="brown" 
                                        placeholder
                                        type="text"
                                        required
                                        id="name"
                                        name="name"
                                        value={member.name}
                                        onChange={handleChange}
                                    />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-2">
                                    <div className="md:w-1/4">
                                        <label className="block mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            E-mail
                                        </label>
                                    </div>
                                    <div className="mx-4">
                                        <Input
                                        id="email"
                                        name="eamil"
                                        variant="standard"
                                        color="brown"
                                        type="email"
                                        placeholder="" 
                                        required
                                        value={member.email}
                                        onChange={handleChange}
                                        /> 
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-2">
                                    <div className="md:w-1/4">
                                        <label className="block mb-1 md:mb-0 " for="inline-full-name">
                                            手機號碼
                                        </label>
                                    </div>
                                    <div className="mx-4">
                                        <Input
                                            variant="standard"
                                            color="brown" 
                                            type="tel"
                                            placeholder=""
                                            id="phone"
                                            name="phone"
                                            value={member.phone}
                                            onChange={handleChange}
                                        />
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
                                    <Button className="flex mx-auto bg-dark"  type="submit" onClick={hadleSubmit}>
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
                                    src={process.env.PUBLIC_URL + "/images/memberInformation/user_pic.png"}
                                    alt=""
                                    />
                                </div>
                                <div className="mt-5 text-center">
                                    <input 
                                    size="sm"
                                    label="選擇圖片"
                                    type="file"
                                    id="photo"
                                    className=" border-2  rounded-sm  g"
                                    nmae="photo"
                                    onChange={handlePhoto}
                                    />
                                </div>
                                    <p className="mt-4 note text-center">檔案大小：最大3MB</p>
                                    <p className="note text-center">檔案格式：JPG, PNG</p>
                            </div>
            </div>
        </div>
                </div>
            </div>
        </div>
    );
}

export default MemberInformation;
