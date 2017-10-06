import { ALBUM_SELECTION } from '../actions/album';

const InitialState = {album:'listo_para_lo_que_venga'}
export default function loadAlbumSelection(state = InitialState, action) {
    switch (action.type) {
        case ALBUM_SELECTION:
          return Object.assign({}, state, {
              album: action.album
          });
        default:
          return state;
    }
}
