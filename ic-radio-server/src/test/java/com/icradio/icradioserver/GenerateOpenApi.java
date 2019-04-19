package com.icradio.icradioserver;

import com.icradio.icradioserver.configs.OpenApiConfig;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.io.BufferedWriter;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * TODO: make a mock call to /v2/api-docs?group=angular-client and save the file in the correct location
 */
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = {ICRadioServerAplication.class, OpenApiConfig.class})
@WebAppConfiguration
@AutoConfigureMockMvc
class GenerateOpenApi {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void generateOpenApi() throws Exception {
        MvcResult mvcResult = this.mockMvc.perform(get("/v2/api-docs?group=angular-client")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();

        MockHttpServletResponse response = mvcResult.getResponse();
        String swaggerJson = response.getContentAsString();
        try (BufferedWriter writer = Files.newBufferedWriter(Paths.get("build", "openapi.json"), StandardCharsets.UTF_8)){
            writer.write(swaggerJson);
        }
    }


}
