export const ALBUM_SELECTION = 'ALBUM_SELECTION';

export function loadAlbumSelection(album) {
    return {
      type: ALBUM_SELECTION,
      album
    };
}
