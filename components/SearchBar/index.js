import { useState } from 'react'

import CustomSelect from '../CustomComponents/CustomSelect'
import OrientationSelect from '@/components/OrientationSelect'
import SizeSelect from '@/components/SizeSelect'
import ColorSelect from '@/components/ColorSelect'
import Modal from '../Modal'
import Image from 'next/image'

export default function SearchBar({ handleSubmit, error, setQuality }) {
  const [type, setType] = useState('photo')
  const [lang, setLang] = useState('en-US')
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <header>
      <form onSubmit={handleSubmit} className='flex py-10 flex-col justify-center items-center'>
        <img
          src='/static/Logo.png'
          className='md:absolute top-4 right-3 md:w-[80px] md:h-[80px] lg:right-10'
          width='120'
          height='120'
        />
        <h1 className=' text-green-800 text-2xl mt-[-15px] sm:text-4xl font-semibold'>SaGualery</h1>
        <div className='w-full flex mt-8 gap-2 gap-y-3 items-center justify-center flex-wrap'>
          <CustomSelect onChange={(e) => setLang(e.target.value)} defultValue='en-US' name='lang'>
            <option value=''>Lang</option>
            <option value='en-US'>ENG</option>
            <option value='es-ES'>ESP</option>
          </CustomSelect>

          <CustomSelect
            onChange={() => (type === 'photo' ? setType('video') : setType('photo'))}
            name='url'
            className='hover:cursor-pointer h-8 px-2 mr-2'
          >
            <option value={'https://api.pexels.com/v1/search?'} className=''>
              Photos
            </option>
            {/* 
            TODO: add video option and request
            <option value={'https://api.pexels.com/videos/search?'} className=''>
              videos
            </option> 
            */}
          </CustomSelect>
          <input
            type='text'
            autoComplete='off'
            name='query'
            placeholder="EX: 'cats' or 'teacher'"
            className={` ${
              error ? 'border-red-600 hover:border-red-800 focus:border-red-600' : ''
            } w-5/6 sm:w-3/6 xl:w-[400px] bg-green-50  border-2 focus:outline-none h-10 border-green-950 rounded-md p-2 hover:border-green-800 focus:border-green-800 transition-colors divide-x-reverse`}
          ></input>
          <div className='flex items-center min-w-[120px] justify-between flex-col sm:flex-row'>
            <button
              className='w-[100px] border-2 px-3 py-1 h-10 mt-auto rounded-lg border-green-950 bg-emerald-800 text-white hover:bg-emerald-600 transition-colors active:bg-emerald-900'
              type='submit'
            >
              Search
            </button>
            <span
              onClick={() => setModalOpen(true)}
              className='leading-5 w-5 h-5 rounded-full bg-emerald-800 text-white text-center sm:ml-2 mt-2 hover:cursor-pointer'
            >
              ?
            </span>
          </div>
        </div>

        <div className='flex gap-6 w-full justify-center mt-10 flex-wrap'>
          <OrientationSelect name='orientation' />
          <SizeSelect
            onChange={(e) => {
              if (e.target.value !== '') {
                setQuality(e.target.value)
              } else {
                setQuality('medium')
              }
            }}
            type={type}
            name='size'
          />
          <ColorSelect disabled={type !== 'photo'} name='color' />
        </div>
      </form>
      {error && (
        <div className='w-full max-w-3xl block mx-auto min-h-[64px] bg-red-300 mb-16 rounded'>
          <p className='text-orange-900 w-full text-center'>An error occurred while searching:</p>
          <p className='text-orange-900 w-full text-center'>"{error}"</p>
        </div>
      )}

      {modalOpen && <Modal close={() => setModalOpen(false)}></Modal>}
    </header>
  )
}
