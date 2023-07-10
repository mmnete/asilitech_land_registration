package com.asilitech.asilitech_orchestration;

import io.grpc.stub.StreamObserver;
import com.asilitech.api.YourRequest;
import com.asilitech.api.YourResponse;
import com.asilitech.api.YoursServiceGrpc.YoursServiceImplBase;

public class YourServiceImpl extends YoursServiceImplBase {
  
  @Override
  public void getYours(YourRequest request, StreamObserver<YourResponse> responseObserver) {
    // Implement your logic here
    // For simplicity, let's just echo the request message in the response
    String message = request.getMessage();
    YourResponse response = YourResponse.newBuilder().setResponse(message + " your response is here!").build();
    responseObserver.onNext(response);
    responseObserver.onCompleted();
  }
}