import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";

function touchDir(path) {
    if (!fs.existsSync(path))
        fs.mkdirSync(path);
}

const week = process.argv[2];
if (week == null)
    process.exit(1);
touchDir(week);
const id = process.argv[3];
if (id == null)
    process.exit(1);
const dir = path.join(week, id.toString());
touchDir(dir);

const headers = { "User-Agent": "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.22 z0taxios18" }
const source = await axios.get("https://www.acmicpc.net/problem/" + id, { headers });
if (source == null || source.status != 200)
    process.exit(1);
const $ = cheerio.load(source.data);

$(".sampledata[id^='sample-input']").each((idx, element) => {
    const exampleId = $(element).attr("id").slice(-1);
    const exampleDir = path.join(dir, "test" + exampleId);
    touchDir(exampleDir);
    const file = path.join(exampleDir, "input");
    fs.writeFileSync(file, $(element).text().trim());
});
$(".sampledata[id^='sample-output']").each((idx, element) => {
    const exampleId = $(element).attr("id").slice(-1);
    const exampleDir = path.join(dir, "test" + exampleId);
    touchDir(exampleDir);
    const file = path.join(exampleDir, "output");
    fs.writeFileSync(file, $(element).text().trim());
});
