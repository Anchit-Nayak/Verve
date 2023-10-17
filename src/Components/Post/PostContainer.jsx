import React from 'react'
import { BsBookmark, BsReddit, BsLink45Deg, BsWhatsapp} from "react-icons/bs"
import {GoBookmark} from 'react-icons/go'
import {RiTwitterXFill} from 'react-icons/ri'
import {ImFacebook} from 'react-icons/im'
const PostContainer = () => {
  return (
    <div className='bg-gray-800 h-auto w-full rounded-lg text-gray-100 p-8 backdrop-brightness-200'>
        <div className='flex flex-row'>
         <div>
         <div className='flex flex-row mb-5 justify-between'>
          <div>
           <p className='text-gray-400'>By <span className='text-primary-300 hover:underline'>Anchit Nayak</span> | <span>Feb 20 2023, 2:20AM</span></p>
          </div>
          <div className='hidden md:flex justify-between text-gray-200 gap-6'>
          <ImFacebook size={25}/>
          <RiTwitterXFill size={25}/>
          <BsReddit size={25}/>
          <GoBookmark size={25}/>
          <BsWhatsapp size={25}/>
          <BsLink45Deg size={30}/>
          </div>
         </div>

        <div className='flex flex-col'>
        <div className='mb-5'>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat culpa dolorem adipisci aliquid possimus voluptatum aspernatur consectetur? Commodi maiores, nemo a
         d modi ullam quis molestiae non atque eius sequi corporis mollitia repudiandae, doloremque, minus cumque sed quam incidunt nihil! Ullam, velit? Porro voluptas inventore, debitis blanditiis laudantium sequi expedita praesentium commodi obcaecati fuga vero nam molestiae nulla quae ratione cum ut eligendi. Consectetur, nisi a. Debitis eligendi incidunt dolores sapiente blanditiis nulla dicta veritatis saepe modi esse ut perferendis ipsa eos assumenda, nam voluptatibus minima, vel ducimus architecto quis dolorem sequi! Fugiat eaque itaque illum molestiae! Fugiat, commodi odit fugit voluptas dolorum dignissimos animi provident tenetur laborum natus illo non nostrum itaque doloribus dolores dolorem sed, sapiente praesentium at eum sit recusandae. Facere pariatur delectus, repellendus exercitationem nesciunt, nam dolores alias magnam architecto reprehenderit blanditiis natus veniam cum aliquid voluptatem maxime earum, tempore vitae placeat optio enim. Illo quae nobis, quod vitae perferendis ipsum id dolor cumque minima aspernatur quam cupiditate nulla, sapiente possimus? Amet error corporis, incidunt expedita eaque provident unde blanditiis pariatur recusandae laboriosam labore dignissimos odio fugit quia vel dicta porro qui voluptatibus, minus, eos libero? Nihil iusto laudantium corrupti perspiciatis culpa, quo aut accusantium sunt facere maxime laboriosam doloremque aliquam at et nobis vero nostrum sapiente itaque a! Eum, aspernatur. Quaerat perferendis autem nisi ullam obcaecati aspernatur, recusandae laborum impedit, eligendi aliquam repellendus eos magnam odio ipsum distinctio quia aperiam! Beatae, cupiditate maxime! Aliquid, sint eaque. Consequatur, amet quod. Modi non repellat eos asperiores nam iure accusamus consequatur dolorum, id iste eius at, neque nulla quos delectus. Dolorum soluta repellendus tenetur, error numquam laboriosam eligendi aliquid velit totam nemo amet, non sint aperiam ad eveniet, expedita at nihil ea odio sit pariatur saepe? Rem harum numquam, dolor illum et fugit. Nisi sed distinctio eveniet, aut aliquid atque excepturi corrupti. Nihil deleniti vitae cumque at, enim et. Sit similique earum numquam omnis suscipit facilis voluptatem, asperiores, corporis a doloribus vero! Assumenda corrupti harum, in odio quaerat quisquam commodi. Officia provident voluptatibus dolores, nihil sequi delectus. Non officia cumque sapiente natus, dignissimos mollitia voluptas odio sed minus. Molestias esse, at corporis nihil hic illo dolores culpa perferendis quasi delectus distinctio fuga minima volu
         ptate quam tempora nemo accusantium eius rerum tenetur eveniet non? Consequatur, quod nesciunt repellendus in iste nostrum. Dicta ut magni, quod voluptate id possimus veniam exercitationem animi porro maxime, laborum cumque amet sequi, beatae impedit quasi.
        </div>
        <div className='flex md:hidden justify-end text-gray-200 gap-4'>
          <ImFacebook size={25}/>
          <RiTwitterXFill size={25}/>
          <BsReddit size={25}/>
          <GoBookmark size={25}/>
          <BsWhatsapp size={25}/>
          <BsLink45Deg size={30}/>
          </div>
         </div>
         </div>
        </div>
    </div>
  )
}

export default PostContainer