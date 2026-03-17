import { Tool } from './Tool';
import Editor from '../Editor';
declare class CreateMonomerTool implements Tool {
    private readonly editor;
    constructor(editor: Editor);
    mousemove(): void;
}
export default CreateMonomerTool;
