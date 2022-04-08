// 액션 타입 정의
const CHANGE_TEXT = 'home/CHANGE_TEXT';

interface changeText {
    type: typeof CHANGE_TEXT
    text: string
}

type ActionTypes = 
    | changeText

// 액션 생섬함수 정의
const changeText = (text: string = ""): ActionTypes => ({ type: CHANGE_TEXT, text });

export const actionCreators = {
    changeText
}

// 인터페이스
export interface IProps { // 컴포넌트 주입
    text: string
    changeText: Function
}

export interface IState{ 
    text: string
}

export const initialState: IState = {
    text: "",
}

// 리듀서
export default function ReduxScreen(
    state = initialState, 
    action: ActionTypes | any
): IState {
    switch (action.type) {
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
            }; 
        default:
            return state;
    }
}