import OpenAI from "openai";

import { Prompt } from "@polay-ai/ts-sdk/dist/prompt"
import { HasEval } from "@polay-ai/ts-sdk/dist/eval"
// import { wrappedOpenAI } from "@polay-ai/ts-sdk/dist/tracing/wrap/openai";

const openai = new OpenAI({
    apiKey: '',
});

@HasEval
export class RemoveUUID extends Prompt<string, string> {
    protected id = "RemoveUUID";
    protected version = "0.0.1";
    protected model = "gpt-4o-mini";

    protected get systemPrompt(): string {
        return "You will be given a string that may include UUIDs. Only return the string with UUIDs removed.";
    }

    protected async prepare(): Promise<(input: string) => Promise<string>> {
        return async (input: string) => {
            const response = await openai.chat.completions.create({
                model: this.model,
                messages: [
                    { role: 'system', content: this.systemPrompt },
                    { role: 'user', content: input }
                ],
            });

            const output = response.choices[0].message.content as string;
            return output;
        }
    }
}
