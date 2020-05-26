import os from "os"
import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
   * @type { import("../src") }
   */
const {default: isGitRepoDirty} = indexModule

it("should run for a non-repository", async () => {
  const result = await isGitRepoDirty(os.homedir())
  expect(result).toBe(null)
})

it("should run for this project", async () => {
  const result = await isGitRepoDirty(path.join(__dirname, ".."))
  expect(typeof result).toBe("boolean")
})