'use client'

import { useState } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SelectCategory from '../components/SelectCategory'
import { Textarea } from '@/components/ui/textarea'
import { TipTapEditor } from '../components/Editor'
import { JSONContent } from '@tiptap/react'
import { UploadDropzone } from '../lib/uploadthing'
import { Button } from '@/components/ui/button'

function SellRoute() {
  const [json, setJson] = useState<null | JSONContent>(null);
  const [images, setImages] = useState<null | string[]>(null);
  const [ productFile, setProductFile ] = useState<null | string>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-14">
      <Card>
        <form>
          <CardHeader>
            <CardTitle>Sell your product with ease</CardTitle>
            <CardDescription>
              Please describe your product here in detail so that it can be sold
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <Label>Name</Label>
              <Input
                name="name"
                type="text"
                placeholder="Name of your product"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Category</Label>
              <SelectCategory />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label>Price</Label>
              <Input type="number" name="price" placeholder="$29" />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label>Small Summary</Label>
              <Textarea
                name="smallDescription"
                placeholder="Please describe your product within 50 words..."
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <Input
                type="hidden"
                name="description"
                value={JSON.stringify(json)}
              />
              <Label>Description</Label>
              <TipTapEditor json={json} setJson={setJson} />
            </div>

            <div className="flex flex-col gap-y-2">
              <Input type="hidden" name="images" value={JSON.stringify(images)} />
              <Label>Product Images</Label>
              <UploadDropzone
                onClientUploadComplete={res => {
                  setImages(res.map(item => item.url))
                }}
                onUploadError={(error: Error) => {
                  throw new Error(`${error}`)
                }}
                endpoint={'imageUploader'}
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <Input type="hidden" name="productFile" value={productFile ?? ""} />
              <Label>Product File</Label>
              <UploadDropzone onClientUploadComplete={(res) => {
                setProductFile(res[0].url)
              }} endpoint={'productFileUpload'} onUploadError={(error: Error) => {
                throw new Error(`${error}`)
              }} />
            </div>
          </CardContent>

          <CardFooter className="mt-5">
            <Button>Submit Form</Button>
          </CardFooter>
        </form>
      </Card>
    </section>
  )
}

export default SellRoute
