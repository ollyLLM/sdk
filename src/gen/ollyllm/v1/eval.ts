// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,long_type_string
// @generated from protobuf file "ollyllm/v1/eval.proto" (package "ollyllm.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 *  VersionedEval represents a unique eval.
 *
 * @generated from protobuf message ollyllm.v1.VersionedEval
 */
export interface VersionedEval {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string; // ID of test
    /**
     * @generated from protobuf field: string version = 2;
     */
    version: string; // SemVer of test
}
/**
 * @generated from protobuf message ollyllm.v1.SingleEvalResult
 */
export interface SingleEvalResult {
    /**
     * @generated from protobuf oneof: SingleEvalResultOneOf
     */
    singleEvalResultOneOf: {
        oneofKind: "error";
        /**
         * @generated from protobuf field: bool error = 1;
         */
        error: boolean; // Whether the eval errored
    } | {
        oneofKind: "score";
        /**
         * @generated from protobuf field: int64 score = 2;
         */
        score: string; // Eval score
    } | {
        oneofKind: "percentage";
        /**
         * @generated from protobuf field: float percentage = 3;
         */
        percentage: number; // Eval percentage
    } | {
        oneofKind: "result";
        /**
         * @generated from protobuf field: bool result = 4;
         */
        result: boolean; // Eval result
    } | {
        oneofKind: undefined;
    };
}
/**
 *  RecordEvalRequest represents a request to record an eval run.
 *
 * @generated from protobuf message ollyllm.v1.RecordEvalRequest
 */
export interface RecordEvalRequest {
    /**
     * @generated from protobuf field: ollyllm.v1.VersionedEval versioned_eval = 1;
     */
    versionedEval?: VersionedEval; // Unique eval
    /**
     * @generated from protobuf field: repeated ollyllm.v1.SingleEvalResult eval_results = 2;
     */
    evalResults: SingleEvalResult[]; // List of eval results
}
/**
 * @generated from protobuf message ollyllm.v1.RecordEvalResponse
 */
export interface RecordEvalResponse {
    /**
     * @generated from protobuf field: ollyllm.v1.EvalResult result = 1;
     */
    result: EvalResult;
    /**
     * @generated from protobuf field: repeated ollyllm.v1.SingleEvalResult previous_eval_results = 2;
     */
    previousEvalResults: SingleEvalResult[];
}
/**
 * @generated from protobuf enum ollyllm.v1.EvalResult
 */
export enum EvalResult {
    /**
     * @generated from protobuf enum value: IMPROVEMENT = 0;
     */
    IMPROVEMENT = 0,
    /**
     * @generated from protobuf enum value: REGRESSION = 1;
     */
    REGRESSION = 1,
    /**
     * @generated from protobuf enum value: UNKNOWN = 2;
     */
    UNKNOWN = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class VersionedEval$Type extends MessageType<VersionedEval> {
    constructor() {
        super("ollyllm.v1.VersionedEval", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "version", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<VersionedEval>): VersionedEval {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.version = "";
        if (value !== undefined)
            reflectionMergePartial<VersionedEval>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VersionedEval): VersionedEval {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string version */ 2:
                    message.version = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: VersionedEval, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string version = 2; */
        if (message.version !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.version);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ollyllm.v1.VersionedEval
 */
export const VersionedEval = new VersionedEval$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SingleEvalResult$Type extends MessageType<SingleEvalResult> {
    constructor() {
        super("ollyllm.v1.SingleEvalResult", [
            { no: 1, name: "error", kind: "scalar", oneof: "singleEvalResultOneOf", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "score", kind: "scalar", oneof: "singleEvalResultOneOf", T: 3 /*ScalarType.INT64*/ },
            { no: 3, name: "percentage", kind: "scalar", oneof: "singleEvalResultOneOf", T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "result", kind: "scalar", oneof: "singleEvalResultOneOf", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<SingleEvalResult>): SingleEvalResult {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.singleEvalResultOneOf = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<SingleEvalResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SingleEvalResult): SingleEvalResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool error */ 1:
                    message.singleEvalResultOneOf = {
                        oneofKind: "error",
                        error: reader.bool()
                    };
                    break;
                case /* int64 score */ 2:
                    message.singleEvalResultOneOf = {
                        oneofKind: "score",
                        score: reader.int64().toString()
                    };
                    break;
                case /* float percentage */ 3:
                    message.singleEvalResultOneOf = {
                        oneofKind: "percentage",
                        percentage: reader.float()
                    };
                    break;
                case /* bool result */ 4:
                    message.singleEvalResultOneOf = {
                        oneofKind: "result",
                        result: reader.bool()
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SingleEvalResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool error = 1; */
        if (message.singleEvalResultOneOf.oneofKind === "error")
            writer.tag(1, WireType.Varint).bool(message.singleEvalResultOneOf.error);
        /* int64 score = 2; */
        if (message.singleEvalResultOneOf.oneofKind === "score")
            writer.tag(2, WireType.Varint).int64(message.singleEvalResultOneOf.score);
        /* float percentage = 3; */
        if (message.singleEvalResultOneOf.oneofKind === "percentage")
            writer.tag(3, WireType.Bit32).float(message.singleEvalResultOneOf.percentage);
        /* bool result = 4; */
        if (message.singleEvalResultOneOf.oneofKind === "result")
            writer.tag(4, WireType.Varint).bool(message.singleEvalResultOneOf.result);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ollyllm.v1.SingleEvalResult
 */
export const SingleEvalResult = new SingleEvalResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RecordEvalRequest$Type extends MessageType<RecordEvalRequest> {
    constructor() {
        super("ollyllm.v1.RecordEvalRequest", [
            { no: 1, name: "versioned_eval", kind: "message", T: () => VersionedEval },
            { no: 2, name: "eval_results", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SingleEvalResult }
        ]);
    }
    create(value?: PartialMessage<RecordEvalRequest>): RecordEvalRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.evalResults = [];
        if (value !== undefined)
            reflectionMergePartial<RecordEvalRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RecordEvalRequest): RecordEvalRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ollyllm.v1.VersionedEval versioned_eval */ 1:
                    message.versionedEval = VersionedEval.internalBinaryRead(reader, reader.uint32(), options, message.versionedEval);
                    break;
                case /* repeated ollyllm.v1.SingleEvalResult eval_results */ 2:
                    message.evalResults.push(SingleEvalResult.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RecordEvalRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* ollyllm.v1.VersionedEval versioned_eval = 1; */
        if (message.versionedEval)
            VersionedEval.internalBinaryWrite(message.versionedEval, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated ollyllm.v1.SingleEvalResult eval_results = 2; */
        for (let i = 0; i < message.evalResults.length; i++)
            SingleEvalResult.internalBinaryWrite(message.evalResults[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ollyllm.v1.RecordEvalRequest
 */
export const RecordEvalRequest = new RecordEvalRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RecordEvalResponse$Type extends MessageType<RecordEvalResponse> {
    constructor() {
        super("ollyllm.v1.RecordEvalResponse", [
            { no: 1, name: "result", kind: "enum", T: () => ["ollyllm.v1.EvalResult", EvalResult] },
            { no: 2, name: "previous_eval_results", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SingleEvalResult }
        ]);
    }
    create(value?: PartialMessage<RecordEvalResponse>): RecordEvalResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.result = 0;
        message.previousEvalResults = [];
        if (value !== undefined)
            reflectionMergePartial<RecordEvalResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RecordEvalResponse): RecordEvalResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ollyllm.v1.EvalResult result */ 1:
                    message.result = reader.int32();
                    break;
                case /* repeated ollyllm.v1.SingleEvalResult previous_eval_results */ 2:
                    message.previousEvalResults.push(SingleEvalResult.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RecordEvalResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* ollyllm.v1.EvalResult result = 1; */
        if (message.result !== 0)
            writer.tag(1, WireType.Varint).int32(message.result);
        /* repeated ollyllm.v1.SingleEvalResult previous_eval_results = 2; */
        for (let i = 0; i < message.previousEvalResults.length; i++)
            SingleEvalResult.internalBinaryWrite(message.previousEvalResults[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ollyllm.v1.RecordEvalResponse
 */
export const RecordEvalResponse = new RecordEvalResponse$Type();
