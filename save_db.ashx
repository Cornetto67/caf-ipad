<%@ WebHandler Language="C#" Class="SaveDbHandler" %>
using System;
using System.IO;
using System.Web;

public class SaveDbHandler : IHttpHandler {
    public void ProcessRequest(HttpContext context) {
        context.Response.ContentType = "application/json";
        try {
            using (var ms = new MemoryStream()) {
                context.Request.InputStream.CopyTo(ms);
                byte[] bytes = ms.ToArray();
                if (bytes.Length > 0) {
                    string filePath = context.Server.MapPath("caf_auto.sqlite");
                    File.WriteAllBytes(filePath, bytes);
                    context.Response.Write("{\"status\":\"success\",\"bytes\":" + bytes.Length + "}");
                    return;
                }
            }
        } catch (Exception ex) {
            context.Response.StatusCode = 500;
            context.Response.Write("{\"status\":\"error\",\"message\":\"" + ex.Message + "\"}");
            return;
        }
        context.Response.StatusCode = 400;
        context.Response.Write("{\"status\":\"error\",\"message\":\"Empty payload\"}");
    }

    public bool IsReusable { get { return true; } }
}
