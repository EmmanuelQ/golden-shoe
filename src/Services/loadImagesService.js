const images = []

function getImage (num) {
  return fetch(`/api/product/images?q=shoe${num}`, {
    application: 'application/jpeg'
  }).then(res => res.blob())
  .then(blob => {
    return URL.createObjectURL(blob)
  })
}

function getAllImages () {
  return Promise.all([
    getImage(1),   
    getImage(2),
    getImage(3),
    getImage(4)
  ])
}

 export {getImage, getAllImages}