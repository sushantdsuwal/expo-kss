const fs = require("fs");
const path = require("path");

function createScreen(screenName, customPath = "") {
  const baseDir = path.join(__dirname, "../../src", "screens");
  const screenDir = path.join(baseDir, customPath, screenName);

  if (!fs.existsSync(screenDir)) {
    fs.mkdirSync(screenDir, { recursive: true });
  }

  // Create the subdirectories
  const subDirs = ["hooks", "provider", "components"];
  subDirs.forEach((dir) => {
    const subDirPath = path.join(screenDir, dir);
    if (!fs.existsSync(subDirPath)) {
      fs.mkdirSync(subDirPath);
    }
  });

  const componentTemplate = `import React from 'react';
import { View, Text } from 'react-native';

const ${screenName}Component = () => {
  return (
    <View>
      <Text>${screenName} Component</Text>
    </View>
  );
};

export default ${screenName}Component;
`;

  fs.writeFileSync(
    path.join(screenDir, "components", `${screenName}Component.tsx`),
    componentTemplate,
  );

  const screenTemplate = `import React from 'react';
import ${screenName}Component from './components/${screenName}Component';

const ${screenName} = () => {
  return <${screenName}Component />;
};

export default ${screenName};
`;

  fs.writeFileSync(path.join(screenDir, "index.tsx"), screenTemplate);

  const hookTemplate = `import { useState } from 'react';

interface Use${screenName}HookReturn {
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

export const use${screenName}Hook = (): Use${screenName}HookReturn => {
  const [state, setState] = useState(null);

  // Your logic here

  return { state, setState };
};
`;

  fs.writeFileSync(
    path.join(screenDir, "hooks", `use${screenName}Hook.ts`),
    hookTemplate,
  );

  const providerTemplate = `import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ${screenName}ContextValue {
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

const ${screenName}Context = createContext<${screenName}ContextValue | undefined>(undefined);

export const ${screenName}Provider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<any>(null);

  return (
    <${screenName}Context.Provider value={{ state, setState }}>
      {children}
    </${screenName}Context.Provider>
  );
};

export const use${screenName} = (): ${screenName}ContextValue => {
  const context = useContext(${screenName}Context);
  if (!context) {
    throw new Error(\`use${screenName} must be used within a ${screenName}Provider\`);
  }
  return context;
};
`;

  fs.writeFileSync(
    path.join(screenDir, "provider", `${screenName}Provider.tsx`),
    providerTemplate,
  );

  console.log(`Screen ${screenName} created successfully at ${screenDir}`);
}

module.exports = { createScreen };
