// ESM
// import
// export


// nodejs 환경에서 사용하기 때문에 
// ESM을 사용하지 않고 CommonJS를 사용한다.

// CommonJS
// import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer') 간소화가 가능하다

// export
// Plugins : [
//   autoprefixer
// ]

module.exports = {
  plugins : [
    require('autoprefixer')
  ]
}

