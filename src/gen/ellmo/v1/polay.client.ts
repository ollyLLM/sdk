// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,long_type_string
// @generated from protobuf file "ellmo/v1/polay.proto" (package "ellmo.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { EllmoService } from "./polay";
import type { RecordEvalResponse } from "./eval";
import type { RecordEvalRequest } from "./eval";
import type { ReportSpanRequest } from "./span";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { Empty } from "../../google/protobuf/empty";
import type { TestExecutionRequest } from "./test";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service ellmo.v1.EllmoService
 */
export interface IEllmoServiceClient {
    /**
     * @generated from protobuf rpc: QueueTest(ellmo.v1.TestExecutionRequest) returns (google.protobuf.Empty);
     */
    queueTest(input: TestExecutionRequest, options?: RpcOptions): UnaryCall<TestExecutionRequest, Empty>;
    /**
     * @generated from protobuf rpc: ReportSpan(ellmo.v1.ReportSpanRequest) returns (google.protobuf.Empty);
     */
    reportSpan(input: ReportSpanRequest, options?: RpcOptions): UnaryCall<ReportSpanRequest, Empty>;
    /**
     * @generated from protobuf rpc: RecordEval(ellmo.v1.RecordEvalRequest) returns (ellmo.v1.RecordEvalResponse);
     */
    recordEval(input: RecordEvalRequest, options?: RpcOptions): UnaryCall<RecordEvalRequest, RecordEvalResponse>;
}
/**
 * @generated from protobuf service ellmo.v1.EllmoService
 */
export class EllmoServiceClient implements IEllmoServiceClient, ServiceInfo {
    typeName = EllmoService.typeName;
    methods = EllmoService.methods;
    options = EllmoService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: QueueTest(ellmo.v1.TestExecutionRequest) returns (google.protobuf.Empty);
     */
    queueTest(input: TestExecutionRequest, options?: RpcOptions): UnaryCall<TestExecutionRequest, Empty> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<TestExecutionRequest, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ReportSpan(ellmo.v1.ReportSpanRequest) returns (google.protobuf.Empty);
     */
    reportSpan(input: ReportSpanRequest, options?: RpcOptions): UnaryCall<ReportSpanRequest, Empty> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<ReportSpanRequest, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: RecordEval(ellmo.v1.RecordEvalRequest) returns (ellmo.v1.RecordEvalResponse);
     */
    recordEval(input: RecordEvalRequest, options?: RpcOptions): UnaryCall<RecordEvalRequest, RecordEvalResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<RecordEvalRequest, RecordEvalResponse>("unary", this._transport, method, opt, input);
    }
}
