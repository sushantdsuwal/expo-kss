

```src
├── api
│ ├── currency
│ │ ├── currency.api.ts
│ │ └── useCurrencyApi.ts
├── screens
│ └── dashboard
│ └── CurrencyConverterScreen
│ ├── Provider
│ │ └── CurrencyConverterProvider.tsx
│ ├── hooks
│ │ └── useCurrencyConverter.ts
│ └── components
│ ├── CurrencyPicker.tsx
│ └── ListCurrencies.tsx
```

#Explanation and Key Points

1. API Integration
   ``currency.api.ts``: Handles the API call to fetch currency conversion rates.
   ``useCurrencyApi.ts``: Utilizes react-query to fetch and cache the conversion rates for efficient data retrieval.

2. Provider Context
   ``CurrencyConverterProvider.tsx``: Manages the state for base and target currencies, making the state accessible throughout the module.

3. Custom Hook
   ``useCurrencyConverter.ts``: Combines API data with the context state to provide conversion logic. It also handles loading and error states, ensuring a smooth user experience.

Components

1. ``CurrencyPicker.tsx``
   A component that allows users to select currencies from a dropdown menu.

2. ``ListCurrencies.tsx``
   Displays the converted amount, dynamically updating based on changes in state and API data.

#Modularity and Scalability

Modular Structure: Each file in this module has a single responsibility, making the code easy to understand and maintain.

Scalability: The structure allows for easy expansion by adding more currencies, integrating additional API endpoints, or enhancing features related to currency conversion.

# CLI Tool for Component and Screen Creation

This CLI tool helps automate the creation of components and screens in your React Native project. It generates the necessary files and directories based on the type of component or screen you want to create.

## CLI Commands

The CLI tool provides commands for creating components and screens.

### Create a Component

Use this command to generate a new component. You can specify the type of component to determine the folder where it will be created.

**Usage:**

```bash
yarn fuse create component {componentName} type={type}
```

Parameters:

    • {componentName}: The name of the component you want to create.
    • {type}: The type of component. Can be one of:
      common: Creates the component under src/components/common.
      shared: Creates the component under src/components/screenElements.
      placeholder: Creates the component under src/components/shimmer-placeholders.

### EXAMPLE:

Create a common component

`yarn fuse create component MyComponent type=common`

Create a shared component

`yarn fuse create component MyComponent type=shared`

Create a placeholder component:

`yarn fuse create component MyComponent type=placeholder`

## Create a Screen

Use this command to generate a new screen. You can also specify a custom path where the screen will be created.

Usage:

`yarn fuse create screen {screenName} [-p={customPath}]`

Parameters:

- {screenName}: The name of the screen you want to create.

- -p={customPath} (Optional): The custom path where the screen will be created, relative to src/screens. If not provided, the screen will be created directly under src/screens.

Examples:

Create a screen with default path:

`yarn fuse create screen MyScreen`

Create a screen with a custom path:

`yarn fuse create screen MyScreen -p=Main/Features`

# File Structure

## Component

When you create a component, the following files and directories will be generated:

    •	src/components/{type}/{componentName}/index.tsx

Screen

When you create a screen, the following structure will be generated:

    •	src/screens/{customPath}/{screenName}/
    •	hooks/
    •	use{screenName}Hook.ts
    •	provider/
    •	{screenName}Provider.tsx
    •	components/
    •	{screenName}Component.tsx
    •	index.tsx

Troubleshooting

    •	Ensure you have the correct permissions to create files and directories in your project.
    •	Make sure the scripts/cli.js file has executable permissions. You can set this using:

`chmod +x scripts/cli.js`
