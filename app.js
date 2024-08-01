document.addEventListener("DOMContentLoaded", function () {
    var htmlCodeEditor = ace.edit("html-code-editor");
    var cssCodeEditor = ace.edit("css-code-editor");
    var jsCodeEditor = ace.edit("js-code-editor");

    htmlCodeEditor.setTheme("ace/theme/monokai");
    cssCodeEditor.setTheme("ace/theme/monokai");
    jsCodeEditor.setTheme("ace/theme/monokai");

    htmlCodeEditor.session.setMode("ace/mode/html");
    cssCodeEditor.session.setMode("ace/mode/css");
    jsCodeEditor.session.setMode("ace/mode/javascript");

    htmlCodeEditor.setOption("enableBasicAutocompletion", true);
    htmlCodeEditor.setOption("enableLiveAutocompletion", true);
    cssCodeEditor.setOption("enableBasicAutocompletion", true);
    cssCodeEditor.setOption("enableLiveAutocompletion", true);
    jsCodeEditor.setOption("enableBasicAutocompletion", true);
    jsCodeEditor.setOption("enableLiveAutocompletion", true);

    var outputFrame = document.getElementById("output").contentWindow.document;

    function updateOutput() {
        outputFrame.open();
        var content =
            htmlCodeEditor.getValue() +
            "<style>" +
            cssCodeEditor.getValue() +
            "</style><script>" +
            jsCodeEditor.getValue() +
            "</script>";
        outputFrame.write(content);
        outputFrame.close();
    }

    htmlCodeEditor.getSession().on("change", updateOutput);
    cssCodeEditor.getSession().on("change", updateOutput);
    jsCodeEditor.getSession().on("change", updateOutput);
});
