const antMan = document.querySelector('.ant-man-img')

antSize = function() {
  const smaller = document.querySelector('.ant')
  smaller.addEventListener('click', function() {
    antMan.style.height = '5vh'
  })
}

antSize()

shrinkSize = function() {
  const small = document.querySelector('.shrink')
  small.addEventListener('click', function() {
    antMan.style.height = '30vh'
  })
}

shrinkSize()

normalSize = function() {
  const normal = document.querySelector('.normal')
  normal.addEventListener('click', function() {
    antMan.style.height = '70vh'
  })
}

normalSize()

growSize = function() {
  const grow = document.querySelector('.grow')
  grow.addEventListener('click', function() {
    antMan.style.height = '100vh'
  })
} 

growSize()

giantSize = function() {
  const giant = document.querySelector('.giant')
  giant.addEventListener('click', function() {
    antMan.style.height = '150vh'
  })
} 

giantSize()
