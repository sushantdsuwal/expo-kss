const fs = require('fs');
const path = require('path');

function createComponent(componentName, type) {
  // Determine the base directory based on the type
  let baseDir;
  switch (type) {
    case 'common':
      baseDir = path.join(__dirname, '../../src/components/common');
      break;
    case 'shared':
      baseDir = path.join(__dirname, '../../src/components/screenElements');
      break;
    case 'placeholder':
      baseDir = path.join(
        __dirname,
        '../../src/components/shimmer-placeholders',
      );
      break;
    default:
      console.error(
        'Invalid type. Must be one of: common, shared, placeholder',
      );
      process.exit(1);
  }

  // Ensure the path is correctly joined
  const componentDir = path.join(baseDir, componentName);

  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }

  const componentTemplate = `import React from 'react';
import { View, Text } from 'react-native';

const ${componentName} = () => {
  return (
    <View>
      <Text>${componentName} Component</Text>
    </View>
  );
};

export default ${componentName};
`;

  fs.writeFileSync(path.join(componentDir, 'index.tsx'), componentTemplate);

  console.log(
    `Component ${componentName} created successfully at ${componentDir}`,
  );
}

module.exports = { createComponent };
