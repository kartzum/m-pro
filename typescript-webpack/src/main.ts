import { Writer } from "./writer";

export class Entry {
    static start() {
        const writer = new Writer();
        writer.start();
    }
}

window["entry"] = Entry;