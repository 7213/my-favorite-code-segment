import useIsBrowser from '@docusaurus/useIsBrowser';

export function useLocalBootstrap(): boolean {
    const isBrowser = useIsBrowser();
    if (!isBrowser) return false;
    else if (document.location.hostname === 'localhost') {
        return true;
    }
    return false;
}
