import Image from 'next/image'
import SearchBar from '@/components/SearchBar'
import Loader from '@/components/Loader'

import { useSearch } from '@/hooks/useSearch'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Home() {
  const {
    handleSubmit,
    photos,
    error,
    loading,
    setLoading,
    handleInfiniteScroll,
    data,
    quality,
    setQuality,
  } = useSearch()

  return (
    <>
      <SearchBar
        {...{
          handleSubmit,
          error,
          setQuality,
        }}
      />
      <div className='h-[80px]'>{loading && <Loader />}</div>

      <main className={'px-5 w-full max-w-[1700px] relative left-1/2 -translate-x-1/2'}>
        <InfiniteScroll
          next={handleInfiniteScroll}
          hasMore={data.total_results !== photos?.length}
          dataLength={photos?.length || 0}
          endMessage={
            data.total_results !== 0 ? (
              <p className='w-full text-lg text-center mt-10 mb-7'>you have seen it all</p>
            ) : null
          }
          scrollThreshold='2000px'
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 0: 1, 350: 2, 700: 3, 900: 4, 1100: 5, 1300: 6, 1500: 7 }}
          >
            <Masonry gutter='7px'>
              {
                photos?.length !== 0 &&
                  photos.map((photo, i) => {
                    return (
                      <picture key={photo.id}>
                        <Image
                          onLoadingComplete={() => {
                            if (i === photos.length - 1) {
                              setLoading(false)
                            }
                          }}
                          loading='eager'
                          width='300'
                          height='400'
                          src={photo.src[quality]}
                          alt={photo.alt}
                        />
                      </picture>
                    )
                  })
                // : loading === true && setLoading(false)
              }
            </Masonry>
          </ResponsiveMasonry>
        </InfiniteScroll>
        {data.total_results === 0 && <p className='text-center w-full'>0 results found</p>}
      </main>
    </>
  )
}
