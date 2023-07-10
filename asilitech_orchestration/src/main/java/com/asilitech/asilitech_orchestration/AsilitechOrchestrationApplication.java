package com.asilitech.asilitech_orchestration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import io.grpc.Server;
import io.grpc.ServerBuilder;

@EnableAutoConfiguration(exclude = { DataSourceAutoConfiguration.class })
@SpringBootApplication
public class AsilitechOrchestrationApplication {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(AsilitechOrchestrationApplication.class, args);
	
		// Start the gRPC server
		Server server = ServerBuilder.forPort(8080).addService(new YourServiceImpl()).build();
		server.start();
		server.awaitTermination();
	  }
}
