export default function Modal({ close }) {
  return (
    <div className='h-screen absolute w-full bg-black bg-opacity-50 top-0 z-20'>
      <div className='w-3/4 max-w-[400px] h-[300px] bg-white relative top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
        <h3 className='w-full text-center text-2xl font-bold pt-5 text-green-800'>SaGualery:</h3>
        <p className='w-full p-3 mt-4 text-center'>
          Sagualery is a search engine for produced photos. Allowing you to choose its
          <strong> Orientation</strong>, prevailing <strong>Color</strong> and
          <strong> Size</strong>
        </p>
        <div
          onClick={close}
          className='mx-auto flex items-center justify-center mt-4 w-10 h-10 border-2 border-green-600 hover:border-green-800 rounded-full hover:cursor-pointer text-green-800 transition-colors'
        >
          <span className='text-xl font-semibold'>X</span>
        </div>
      </div>
    </div>
  )
}
