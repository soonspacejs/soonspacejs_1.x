(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index */ \"./src/index.js\");\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet THREE = null;\nconst SCENETYPE = 'effect';\n\nclass SceneEffect {\n  constructor(ssp) {\n    this.ssp = ssp;\n    this.viewport = ssp.viewport;\n    THREE = ssp.viewport.THREE;\n    this.weather = {\n      scene: null,\n      camera: null\n    };\n\n    this._initWeather();\n  }\n\n  createWaves(option = {}) {\n    let count = 0;\n    const {\n      xAxisCount = 500,\n      yAxisCount = 500,\n      separation = 60,\n      scale = 10,\n      maxFluctua = 1,\n      position = {\n        x: 0,\n        y: 0,\n        z: 0\n      },\n      color = '#ffffff'\n    } = option;\n    const numParticles = xAxisCount * yAxisCount;\n    const positions = new Float32Array(numParticles * 3);\n    const scales = new Float32Array(numParticles);\n    let i = 0,\n        j = 0;\n\n    for (let ix = 0; ix < xAxisCount; ix++) {\n      for (let iy = 0; iy < yAxisCount; iy++) {\n        positions[i] = ix * separation - xAxisCount * separation / 2; // x\n\n        positions[i + 1] = 0; // y\n\n        positions[i + 2] = iy * separation - yAxisCount * separation / 2; // z\n\n        scales[j] = 1;\n        i += 3;\n        j++;\n      }\n    }\n\n    const geometry = new THREE.BufferGeometry();\n    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));\n    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1)); //geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));\n\n    const vertexShader = `\n    attribute float scale;\n    uniform float showD;\n    varying  float dcolor;\n    void main() {\n\n      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n    \n      //gl_PointSize = 5.0;\n      float fDistance =sqrt( position.x*position.x+position.z*position.z);\n      if(fDistance < showD)\n      return;\n\n      dcolor = fDistance/355.0/3.0;\n      gl_Position = projectionMatrix * mvPosition;\n      gl_PointSize = scale * ( 300.0 / - mvPosition.z );\n    }\n    `;\n    const fragmentShader = `\n    uniform vec3 color;\n    varying  float dcolor;\n    void main() {\n\n      //if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;\n      int buffer = int(dcolor);\n       \n      //gl_FragColor = vec4( dcolor,sin(dcolor),0, 1.0 );\n      gl_FragColor = vec4( color, 1.0 );\n\n    }\n    `;\n    const material = new THREE.ShaderMaterial({\n      transparent: true,\n      uniforms: {\n        color: {\n          value: new THREE.Color(color)\n        },\n        showD: {\n          value: 500.0\n        }\n      },\n      vertexShader,\n      fragmentShader\n    });\n    material.uniforms.color = {\n      value: new THREE.Color(color)\n    };\n    const particles = new THREE.Points(geometry, material);\n    particles.position.set(position.x, position.y, position.z);\n\n    particles.update = function () {\n      const positions = particles.geometry.attributes.position.array;\n      const scales = particles.geometry.attributes.scale.array;\n      let i = 0,\n          j = 0;\n      const maxDistance = Math.sqrt(xAxisCount / 2.0 * (xAxisCount / 2.0) + yAxisCount / 2.0 * (yAxisCount / 2.0));\n\n      for (let ix = 0; ix < xAxisCount; ix++) {\n        for (let iy = 0; iy < yAxisCount; iy++) {\n          let dx = ix - xAxisCount / 2.0;\n          let dy = iy - yAxisCount / 2.0;\n          let distance = Math.sqrt(dx * dx + dy * dy);\n          positions[i + 1] = Math.cos((distance / maxDistance * 50 - count) * 1) * 50 * maxFluctua;\n          scales[j] = scale;\n          i += 3;\n          j++;\n        }\n      }\n\n      particles.geometry.attributes.position.needsUpdate = true;\n      particles.geometry.attributes.scale.needsUpdate = true;\n      count += 0.01;\n    };\n\n    const manager = this.ssp.manager[`${SCENETYPE}Manager`];\n    manager.effectObjects.push(particles);\n    this.ssp.addObject(particles, manager.scene);\n  }\n\n  createBuilds(option = {}) {\n    const {\n      buildWidth = 70,\n      buildDepth = 70,\n      buildHeigh = 130,\n      ItemCount = 30,\n      gapX = 4,\n      gapY = 4,\n      boxShowDistance = 1114.0,\n      randShift = 0.5,\n      position = {\n        x: 0,\n        y: 0,\n        z: 0\n      },\n      color = '#ffffff'\n    } = option;\n\n    for (let ix = 0; ix < ItemCount; ix++) {\n      for (let iy = 0; iy < ItemCount; iy++) {\n        const curX = (ix - ItemCount / 2) * buildWidth * gapX + (Math.random() - 1) * randShift * buildWidth * gapX;\n        const curY = (iy - ItemCount / 2) * buildDepth * gapY + (Math.random() - 1) * randShift * buildDepth * gapY;\n        const curDistance = Math.sqrt(curX * curX + curY * curY);\n        if (curDistance < boxShowDistance) continue;\n        const buferH = Math.floor(Math.random() * buildHeigh);\n        const boxHeigh2 = buferH + buildHeigh;\n        var geometry2 = new THREE.BoxGeometry(buildWidth, boxHeigh2, buildDepth, 1, 20, 1);\n        geometry2.translate(curX, boxHeigh2 / 2, curY);\n        geometry2.computeBoundingBox();\n        const myLowHeigh = new Float32Array(2);\n        myLowHeigh[0] = geometry2.boundingBox.min.y;\n        myLowHeigh[1] = geometry2.boundingBox.max.y;\n        const vertexShader = `\n          uniform vec2 lowHeigh;\n          varying float ratioHeigh;\n          void main() {\n    \n            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n             float maxHeigh = lowHeigh.y - lowHeigh.x;\t\n             float curHeigh = lowHeigh.y - position.y;\t\n             ratioHeigh = curHeigh/maxHeigh;\n            gl_Position = projectionMatrix * mvPosition;\n    \n          }\n          `;\n        const fragmentShader = `\n          uniform vec3 color;\n          varying float ratioHeigh;\n          void main() {\n    \n            gl_FragColor = vec4( color, 1.0-ratioHeigh*ratioHeigh*ratioHeigh-0.5 );\n        \n    \n          }\n          `;\n        const material2 = new THREE.ShaderMaterial({\n          transparent: true,\n          uniforms: {\n            color: {\n              value: new THREE.Color(color)\n            },\n            lowHeigh: {\n              value: new THREE.Vector2(myLowHeigh[0], myLowHeigh[1])\n            }\n          },\n          vertexShader,\n          fragmentShader\n        });\n        material2.uniforms.color = {\n          value: new THREE.Color(color)\n        };\n        var cube = new THREE.Mesh(geometry2, material2);\n        cube.position.set(position.x, position.y, position.z);\n        this.ssp.addObject(cube, this.ssp.manager.getScene(SCENETYPE));\n      }\n    }\n  }\n\n  animate() {\n    requestAnimationFrame(() => {\n      this.animate();\n    });\n    this.weather.scene.children.forEach(child => {\n      const {\n        vertices\n      } = child.geometry;\n      vertices.forEach(function (v) {\n        v.y = v.y - v.velocityY;\n        v.x = v.x - v.velocityX;\n        if (v.y <= 0) v.y = 60;\n        if (v.x <= -20 || v.x >= 20) v.velocityX = v.velocityX * -1;\n      }); // 顶点变动之后需要更新，否则无法实现雨滴特效\n\n      child.geometry.verticesNeedUpdate = true;\n    });\n    this.viewport.renderer.render(this.weather.scene, this.weather.camera);\n    this.viewport.trigerRender();\n  }\n\n  _initWeather() {\n    this.weather.scene = new THREE.Scene();\n    const camera = new THREE.PerspectiveCamera(45, this.viewport.container.offsetWidth / this.viewport.container.offsetHeight, 0.1, 10000);\n    camera.position.set(30, 0, 80);\n    camera.lookAt(new THREE.Vector3(0, 0, 0));\n    this.weather.camera = camera;\n    this.animate();\n  }\n\n  initSunny() {\n    this.weather.scene.clear();\n  }\n\n  initRainy(option = {}) {\n    const {\n      imgUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAASQSURBVHjarFfPb1RVFP7Oufe9Nz86zLSlI2DjD4xYYyFGY7QJiQu60ITEENlhIgs2hIoLjewb3bvgH8DEuDAEY1y4IKwMRYmAhGAULZGGinSmM5158+bN+3GPi04rbaf0tvUkMy95uffc73znO+fcRyKC1Tb5fYqNzNOMW/f9N6q1Ogad4EpiaMM9X32wb8073WuhbOwLfmxwr6lPLQSZZKiMKwWHIdi89QRg9OMRaAZuz0Tv3Hyg3gOV5IWsXBh5yv02Tv8nAI1OtO4GIiBJMXTzPj4lYgBC1+6Zz3YVwynNmHs8Cxk7ALON9roumAzu/KPPVFq5Ua0Xj6u01Ojl6eDM8+XkYyO8fQB+M9Nzu2Lg4UJzbKZZmFAMEGj5/b1adkJFC+ef6M9NGbPNFGQyazVAIIgxuhbmJqNEeS4LlgpIERAl7NWi7OSwI2+DObFVZE8AT+5x1y5UhLuz0UQlUONaYYV/6QqzErjjqZNOPLvH/TxJZesAdmbWHv7r783dP911P4RSoB7hEQBhxvXp9KOi8b9+bm/hfmoBoqdi0lRW/GAMHrbVmUZHPePQ+k5dNqgGzvDfTf0JGbPWjy0DP9zyV6GkV3+rZo97mpA+EjFWpSEFwWPg9pzzPn5pfZFCfl6x6M2iHYB6S1bUfb2jT7ZiFBURIL0joW4LJSYEkRSna3yymI1PmA3aak8AYTtZPlxIXm4k+WNMAEE2FDdBwAzUY++YQ+FZEtyQzWog7xLyLiGrgSB2TxvhDIisKku6yEU4047d0zkN9DmEPofsGdj3dAGKgXpgXpn5i4/CrM35Y1mQxUy1TebocNk9uyPH11KzCQbIRKC0g0YrOd5JucC0+TnHJOikXKi3kuOcdsAmsgcQhAnm/aT8R4WOMBG2aqwIf1b5SN1PymGY2ANoE8q1WB0OjDusyGwdAAxaxhmej9XhNqNsDaA6L/vnFmh8cdhsnQECAcJ4sEDjD6tmvzWAWosOtiJ1AETAlu45/9UEERBEfKDW4oP2IvScMVFqpFtT2JaJQJQeIc8ds78RhV7JQBSRQCDLc3/z8QNEgjhl1TCqZM2A55iU6ZE8bkcDICgCMtqk9p2Qgjua4orZLv0ADAiakkqe23esARTdzsWcSm7AALJdEEaQ0/GNkhtetNbAUF94yXGoONfJjy8NmM0AkaULSvcbY09f55uSF16yZkDlB2YH+71zu/LB9dgsFYKxmIXoQjUABHFK2J0Pr/cPZM9R385ZawYGyYdW4qtBPlUNvO9iowYcy45I3f9EGJ5K50eHWqeGHOMvfrrl7RjQZMAwKHhqaqRYPZFXUTMWXk7D0r1gZZ+U5fhTYeQ5ar5UrJzYkaEphoFeJwBeL4cCIBGg5EQXXuxfOJRT7csCgQjBdLcJAENLT4YRggiQ5fbl0YHGoZITX0iElv1Zp2BlIyMAdHWn135rwKm/e9cvHAvhvgbhHQZMEAJTKkSmkVHR1b15/8t67J4XoaZN0rSNort0N0s6PJdj91K/8l8v5PTYdDA4AAL25urzfiueaqfujyUnnKnHrthOkH8HAIl7DGQhmnDgAAAAAElFTkSuQmCC',\n      size = 2,\n      opacity = 0.5\n    } = option;\n    this.weather.scene.clear();\n    const texture = new THREE.TextureLoader().load(imgUrl);\n    const pointsMaterial = new THREE.PointsMaterial({\n      size,\n      transparent: true,\n      opacity,\n      map: texture,\n      blending: THREE.AdditiveBlending,\n      sizeAttenuation: true,\n      depthTest: false\n    });\n    const geometry = new THREE.Geometry();\n    const range = 100;\n\n    for (let i = 0; i < 500; i++) {\n      const vertice = new THREE.Vector3(Math.random() * range - range / 2, Math.random() * range * 1.5, Math.random() * range - range / 2);\n      /* 纵向移动速度 */\n\n      vertice.velocityY = 0.5 + Math.random() / 10;\n      /* 横向移动速度 */\n\n      vertice.velocityX = 0;\n      /* 将顶点加入几何 */\n\n      geometry.vertices.push(vertice);\n    }\n\n    geometry.center();\n    const points = new THREE.Points(geometry, pointsMaterial);\n    points.position.y = -30;\n    this.weather.scene.add(points);\n  }\n\n  initSnow(option = {}) {\n    const {\n      imgUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACW1BMVEUAAAD///8CAgIPDw8BAQF1dXVsbGwLCwujo6NeXl43NzesrKzPz8+EhIQSEhIDAwNpaWnFxcXo6OhbW1vf398VFRU/Pz+YmJiXl5e7u7uUlJTi4uI2Njbn5+ccHBzQ0NApKSkwMDBSUlKDg4MeHh65ubmlpaVQUFB/f3+dnZ04ODgFBQUICAgtLS1XV1eqqqpRUVHd3d2Li4tOTk6GhobZ2dn8/Pz9/f14eHhaWlq3t7cHBweoqKgMDAzX19c7OztfX19FRUW+vr7s7OwvLy8KCgohISF5eXnU1NR6enqRkZF2dnbAwMB9fX1jY2Ourq6Ojo7g4OAQEBD09PSwsLANDQ0ZGRnIyMjS0tK4uLhdXV1KSkrl5eVnZ2fW1tZvb29NTU2FhYXw8PBUVFQUFBRAQEAuLi49PT3z8/PHx8cRERGnp6fExMTY2Nj39/cjIyNGRkbMzMxcXFyBgYGenp68vLyQkJC0tLQrKysJCQkbGxsODg5gYGCampp7e3s6Ojr5+fnOzs6/v78XFxdPT0/GxsampqbT09MgICAGBga2trYlJSU5OTm1tbWkpKQyMjKgoKDKyspwcHAkJCQYGBiSkpIAAAABAQERERE4ODhZWVkbGxtycnJlZWVTU1MUFBRISEiAgIBEREShoaEzMzNqamqXl5cmJibBwcHFxcWOjo5NTU0WFhYJCQkxMTGWlpYtLS2ZmZkvLy80NDSHh4fd3d1oaGgCAgILCwtUVFSUlJTDw8NiYmJYWFjGxsY7OzvExMRKSkoTExOKioqQkJCwsLC1tbU9PT3m5uZ5kJL/AAAAlnRSTlP+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v6TC5kUAAAB5klEQVR4XqWTU5MkURSE81ZV0zbGto21bdu2bfP0GEvbNn7WRk/09lRXd0w/7PeQFRmnHu7NmwcACGEIkPrIl/okjk8MESikFFIQST3EcBgIxXA1FDwHKIYCECCC+jRvhJaaZgH6ss8w5ogG9O/UzebWgut56NS2VDNd+BYiJQUyfg27W4THqa8b0idRMDJCWGVjk15ukm/JzVK9HaQqyYEgzWHIGH9jXYYDKeWDK4qVPGKZnW3xsSqoKxdp5dKgOHr29KbRd2v0nfvUMeU20NL27kl0UGkjR3lcQGaqTGkDxrnSx6f1h0Gon0aECRNvQGauuAryTi588DApeWrkNRdMn2Ga6QiwL845c0vmzb9XzEwLNR7r4sgPS+xLS5ctX7Hy0Srl6jVr5S/WmauK1m+Q+8V96P5YtlFNcDOWBdpcbpP0QUC+M9sOzqhJ2boN4LfXuHdE9yFIRLa695Xf6fefzPadu7p6rxEX3Yfde/aqAmwf9rMD1oM8wBkgRkD1ofzDJnYEyqPWY8fdQEwfTpysdz4/ZYHrtOyV13Mmpg9BMjh0b8724NyH85+SS71x+nDhouGr5hsu/cBPXchL+8AX2tFq4cBfRlvNFYQHImp5ILdWEADoC/SIC/efixOfxMubcP3/Anriqm2DBhxnAAAAAElFTkSuQmCC',\n      size = 2,\n      opacity = 0.9\n    } = option;\n    this.weather.scene.clear();\n    const texture = new THREE.TextureLoader().load(imgUrl);\n    const pointsMaterial = new THREE.PointsMaterial({\n      size,\n      transparent: true,\n      opacity,\n      map: texture,\n      blending: THREE.AdditiveBlending,\n      sizeAttenuation: true,\n      depthTest: false\n    });\n    const geometry = new THREE.Geometry();\n    const range = 100;\n\n    for (let i = 0; i < 1500; i++) {\n      const vertice = new THREE.Vector3(Math.random() * range - range / 2, Math.random() * range * 1.5, Math.random() * range - range / 2);\n      /* 纵向移动速度 */\n\n      vertice.velocityY = 0.1 + Math.random() / 10;\n      /* 横向移动速度 */\n\n      vertice.velocityX = (Math.random() - 0.5) / 2;\n      /* 将顶点加入几何 */\n\n      geometry.vertices.push(vertice);\n    }\n\n    geometry.center();\n    const points = new THREE.Points(geometry, pointsMaterial);\n    points.position.y = -30;\n    this.weather.scene.add(points);\n  }\n\n}\n\nwindow.SceneEffect = SceneEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SceneEffect);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
});