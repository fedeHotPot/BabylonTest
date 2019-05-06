/// <reference path = "babylon.2.1.d.ts"/>

var TestApp = TestApp || {};

TestApp.Init = function () {
    var canvas = document.getElementById('renderCanvas');
    var engine = BABYLON.Engine(canvas, true);
    var scene = BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("camera", 0, Math.PI / 2, 13, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, false);
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    var knot = BABYLON.Mesh.CreateTorusKnot("mesh", 2, 0.5, 128, 64, 2, 50, scene);
    var material = BABYLON.StandardMaterial("mat", scene);
    knot.material = material;
    material.diffuseColor = new BABYLON.Color3(1, 0, 1);

    var renderLoop = function () {
        scene.render();
    };
    engine.runRenderLoop(renderLoop);


};

TestApp.Update = function () {

};