export default function ImageThumbnail({images, selectThumbnail, currentThumbnail}) {

    

    return (
        <div className="h-24 flex items-center gap-x-4 overflow-hidden">
            {
              images.map((img, index) => {
                return(
                  <div key={index} className={`h-full w-full rounded-xl overflow-hidden hover:cursor-pointer ${index === currentThumbnail ? "border-[3px] border-primary-orange" : ''}`} onClick={() => selectThumbnail(index)}>
                    <div style={{'--bg-thumbnail': `url(${img})`}} className={`bg-[image:var(--bg-thumbnail)] bg-cover bg-no-repeat h-full ${index === currentThumbnail ? "opacity-60" : ''}`}></div>
                  </div>
                )
              })
            }
        </div>
    )
}