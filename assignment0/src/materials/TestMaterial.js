class TestMaterial extends Material {
  constructor(color, colorMap) {
    let textureSample = 0;
    if (colorMap != null) {
      textureSample = 1;
      super(
        {
          uSampler: { type: 'texture', value: colorMap },
          uTextureSample: { type: '1i', value: textureSample },
          uKd: { type: '3fv', value: color },
        },
        [],
        VertexShader,
        FragmentShader
      );
    } else {
      //console. log (color);
      super(
        {
          uTextureSample: { type: '1i', value: textureSample },
          uKd: { type: '3fv', value: color },
        },
        [],
        VertexShader,
        FragmentShader
      );
    }
  }
}
