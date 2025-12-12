import { copyFile, mkdir, stat } from 'node:fs/promises'
import path from 'node:path'

/**
 * Cloudflare Pages enforces a 100-character limit per routing rule.
 * Some framework-generated routes files can exceed this limit.
 *
 * Nuxt/Nitro may generate `.output/public/_routes.json` during build.
 * This script force-copies our curated `public/_routes.json` into the build output
 * so the deploy always uses safe, short wildcard rules.
 */
class CloudflarePagesRoutesEnsurer {
  constructor({
    repoRoutesPath = path.join(process.cwd(), 'public', '_routes.json'),
    outputRoutesPath = path.join(process.cwd(), '.output', 'public', '_routes.json')
  } = {}) {
    this.repoRoutesPath = repoRoutesPath
    this.outputRoutesPath = outputRoutesPath
  }

  async ensureOutputDirectoryExists() {
    await mkdir(path.dirname(this.outputRoutesPath), { recursive: true })
  }

  async assertRepoRoutesExists() {
    await stat(this.repoRoutesPath)
  }

  async copyRoutesIntoOutput() {
    await copyFile(this.repoRoutesPath, this.outputRoutesPath)
  }

  async run() {
    await this.assertRepoRoutesExists()
    await this.ensureOutputDirectoryExists()
    await this.copyRoutesIntoOutput()
    // eslint-disable-next-line no-console
    console.log(`[cf-pages] Ensured _routes.json at ${this.outputRoutesPath}`)
  }
}

await new CloudflarePagesRoutesEnsurer().run()



