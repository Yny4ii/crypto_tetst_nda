import { RefObject, useEffect } from 'react';

export function useOutsideClick<T extends HTMLElement = any>(
    ref: RefObject<T>,
    callback: () => void
) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
                callback();
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [callback, ref]);
}
