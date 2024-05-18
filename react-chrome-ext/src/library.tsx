import { createRoot } from 'react-dom/client';

const UnknownComponent = ({component}: {component: string}) => {
    return <pre>Unknown component {component}</pre>
}


const createReactComponent = (elementToMountUnder: HTMLElement, component: string) => {
    const root = createRoot(elementToMountUnder);
    switch(component) {
        case "yeet":
            root.render(<h1>yeet</h1>)
            break;
        default:
            root.render(<UnknownComponent component={component} />)
    }
}

/**
 * The actual logiic of the app
 * 1. Find all elements which you want to make worse
 * 2. For each one of those elements, call createReactComponent on it, with a specific component
 */