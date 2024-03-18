import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

export function App() {
    const ctx = require.context("../screens");
    return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);