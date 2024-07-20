// const canvas = document.querySelector('canvas');
// const gl = canvas.getContext('webgl');

// if (!gl) {
//     throw new Error('WebGL not supported');
// }

// const vertexData = [
//     0, 1, 0, 1, 0, 0,  // Vertex 1, Red
//     1, -1, 0, 0, 1, 0,  // Vertex 2, Green
//     -1, -1, 0, 0, 0, 1, // Vertex 3, Blue
// ];

// const buffer = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
// gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);

// const vertexShader = gl.createShader(gl.VERTEX_SHADER);
// gl.shaderSource(vertexShader, `
// attribute vec3 position;
// attribute vec3 color;
// varying vec3 fragColor;

// void main() {
//     gl_Position = vec4(position, 1);
//     fragColor = color;
// }
// `);
// gl.compileShader(vertexShader);

// const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
// gl.shaderSource(fragmentShader, `
// precision mediump float;
// varying vec3 fragColor;

// void main() {
//     gl_FragColor = vec4(fragColor, 1);
// }
// `);
// gl.compileShader(fragmentShader);

// const program = gl.createProgram();
// gl.attachShader(program, vertexShader);
// gl.attachShader(program, fragmentShader);
// gl.linkProgram(program);

// const positionLocation = gl.getAttribLocation(program, 'position');
// gl.enableVertexAttribArray(positionLocation);
// gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 24, 0);

// const colorLocation = gl.getAttribLocation(program, 'color');
// gl.enableVertexAttribArray(colorLocation);
// gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 24, 12);

// gl.useProgram(program);
// gl.drawArrays(gl.TRIANGLES, 0, 3);

// const canvas = document.querySelector('canvas');
// const gl = canvas.getContext('webgl');

// if (!gl) {
//     throw new Error('WebGL not supported');
// }

// const vertexData = [
//     0, 1, 0, 1, 0, 0,  // Vertex 1, Red
//     1, -1, 0, 0, 1, 0,  // Vertex 2, Green
//     -1, -1, 0, 0, 0, 1, // Vertex 3, Blue
// ];

// const buffer = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
// gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);

// const vertexShader = gl.createShader(gl.VERTEX_SHADER);
// gl.shaderSource(vertexShader, `
//     attribute vec3 position;
//     attribute vec3 color;
//     varying vec3 fragColor;
//     uniform float u_rotation; // Uniform for rotation angle
//     uniform mat4 u_projection; // Uniform for projection matrix

//     mat3 rotate(float angle) {
//         float s = sin(angle);
//         float c = cos(angle);
//         return mat3(
//             c, -s, 0,
//             s, c, 0,
//             0, 0, 1
//         );
//     }

//     void main() {
//         mat3 rotationMatrix = rotate(u_rotation);
//         vec3 rotatedPosition = rotationMatrix * position;
//         gl_Position = u_projection * vec4(rotatedPosition, 1);
//         fragColor = color;
//     }
// `);
// gl.compileShader(vertexShader);

// const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
// gl.shaderSource(fragmentShader, `
//     precision mediump float;
//     varying vec3 fragColor;

//     void main() {
//         gl_FragColor = vec4(fragColor, 1);
//     }
// `);
// gl.compileShader(fragmentShader);

// const program = gl.createProgram();
// gl.attachShader(program, vertexShader);
// gl.attachShader(program, fragmentShader);
// gl.linkProgram(program);

// const positionLocation = gl.getAttribLocation(program, 'position');
// gl.enableVertexAttribArray(positionLocation);
// gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 24, 0);

// const colorLocation = gl.getAttribLocation(program, 'color');
// gl.enableVertexAttribArray(colorLocation);
// gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 24, 12);

// gl.useProgram(program);

// // Set the viewport and projection matrix
// gl.viewport(0, 0, canvas.width, canvas.height);

// // Projection matrix setup (orthographic in this case)
// const left = -1.0;
// const right = 1.0;
// const bottom = -1.0;
// const top = 1.0;
// const near = 0.1;
// const far = 10.0;

// const projectionMatrix = mat4.create();
// mat4.ortho(projectionMatrix, left, right, bottom, top, near, far);

// // Get the uniform location for the projection matrix
// const uProjection = gl.getUniformLocation(program, 'u_projection');

// gl.uniformMatrix4fv(uProjection, false, projectionMatrix);

// // Additional rotation-related code
// let rotation = 0;

// function rotateTriangle() {
//     gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
//     rotation += 0.01;

//     const rotationLocation = gl.getUniformLocation(program, 'u_rotation');
//     gl.uniform1f(rotationLocation, rotation);

//     gl.drawArrays(gl.TRIANGLES, 0, 3);

//     requestAnimationFrame(rotateTriangle);
// }

// rotateTriangle();


const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

if (!gl) {
    throw new Error('WebGL not supported');
}

const vertexData = [
    -0.5, 0.5, 0, 1, 0, 0,  // Vertex 1, Red
    0.5, -0.5, 0, 0, 1, 0,  // Vertex 2, Green
    -0.5, -0.5, 0, 0, 0, 1, // Vertex 3, Blue
];

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, `
    attribute vec3 position;
    attribute vec3 color;
    varying vec3 fragColor;
    uniform float u_rotation; // Uniform for rotation angle

    mat3 rotate(float angle) {
        float s = sin(angle);
        float c = cos(angle);
        return mat3(
            c, -s, 0,
            s, c, 0,
            0, 0, 1
        );
    }

    void main() {
        mat3 rotationMatrix = rotate(u_rotation);
        vec3 rotatedPosition = rotationMatrix * position;
        gl_Position = vec4(rotatedPosition, 1);
        fragColor = color;
    }
`);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, `
    precision mediump float;
    varying vec3 fragColor;

    void main() {
        gl_FragColor = vec4(fragColor, 1);
    }
`);
gl.compileShader(fragmentShader);

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

const positionLocation = gl.getAttribLocation(program, 'position');
gl.enableVertexAttribArray(positionLocation);
gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 24, 0);

const colorLocation = gl.getAttribLocation(program, 'color');
gl.enableVertexAttribArray(colorLocation);
gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 24, 12);

gl.useProgram(program);

// Additional rotation-related code
let rotation = 0;

function rotateTriangle() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    rotation += 0.05;

    const rotationLocation = gl.getUniformLocation(program, 'u_rotation');
    gl.uniform1f(rotationLocation, rotation);

    gl.drawArrays(gl.TRIANGLES, 0, 3);

    requestAnimationFrame(rotateTriangle);
}

rotateTriangle();








































// const canvas = document.getElementById("glCanvas");
// const gl = canvas.getContext("webgl");

// if (!gl) {//checks if the web gl is available in the browser or not
//     alert("WebGL is not available in your browser. Please use a compatible browser.");
// }

// // Define the vertices for the triangle.
// const vertices = new Float32Array([
//     0.0, 0.5,
//    -0.5, -0.5,
//     0.5, -0.5
// ]);

// // Create a buffer and put the vertices in it.
// const vertexBuffer = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
// gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

// // Vertex shader program.
// const vsSource = `
//     attribute vec2 coordinates;
//     varying vec3 fragColor;
//     uniform mat4 modelViewMatrix;
//     void main(void) {
//         gl_Position = modelViewMatrix * vec4(coordinates, 0.0, 1.0);
//         fragColor = vec3((coordinates.x + 0.5), (coordinates.y + 0.5), 1.0);
//     }
// `;

// // Fragment shader program.
// const fsSource = `
//     precision mediump float;
//     varying vec3 fragColor;
//     void main(void) {
//         gl_FragColor = vec4(fragColor, 1.0);
//     }
// `;

// // Compile and link the shaders.
// const vs = gl.createShader(gl.VERTEX_SHADER);
// gl.shaderSource(vs, vsSource);
// gl.compileShader(vs);

// const fs = gl.createShader(gl.FRAGMENT_SHADER);
// gl.shaderSource(fs, fsSource);
// gl.compileShader(fs);

// const shaderProgram = gl.createProgram();
// gl.attachShader(shaderProgram, vs);
// gl.attachShader(shaderProgram, fs);
// gl.linkProgram(shaderProgram);
// gl.useProgram(shaderProgram);

// // Get the attribute location and enable it.
// const coord = gl.getAttribLocation(shaderProgram, "coordinates");
// gl.enableVertexAttribArray(coord);

// // Point an attribute to the currently bound VBO.
// gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
// gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);

// // Initialize rotation angle.
// let angle = 0;

// // Get the uniform location for the model-view matrix.
// const modelViewMatrix = gl.getUniformLocation(shaderProgram, "modelViewMatrix");

// function draw() {
//     gl.clearColor(0.0, 0.0, 0.0, 1.0);
//     gl.clear(gl.COLOR_BUFFER_BIT);

//     // Calculate the model-view matrix for rotation.
//     const radians = (angle * Math.PI) / 180;
//     const cos = Math.cos(radians);
//     const sin = Math.sin(radians);

//     const rotationMatrix = new Float32Array([
//         cos, -sin, 0.0, 0.0,
//         sin, cos, 0.0, 0.0,
//         0.0, 0.0, 1.0, 0.0,
//         0.0, 0.0, 0.0, 1.0
//     ]);

//     gl.uniformMatrix4fv(modelViewMatrix, false, rotationMatrix);

//     gl.drawArrays(gl.TRIANGLES, 0, 3);

//     // Increment the rotation angle for continuous rotation.
//     angle += 1;

//     requestAnimationFrame(draw);
// }

// draw();