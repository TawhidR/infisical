// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { zodBuffer } from "@app/lib/zod";

import { TImmutableDBKeys } from "./models";

export const KmipInstanceServerCertificatesSchema = z.object({
  id: z.string().uuid(),
  commonName: z.string(),
  altNames: z.string(),
  serialNumber: z.string(),
  keyAlgorithm: z.string(),
  issuedAt: z.date(),
  expiration: z.date(),
  encryptedCertificate: zodBuffer,
  encryptedChain: zodBuffer,
  encryptedPrivateKey: zodBuffer
});

export type TKmipInstanceServerCertificates = z.infer<typeof KmipInstanceServerCertificatesSchema>;
export type TKmipInstanceServerCertificatesInsert = Omit<
  z.input<typeof KmipInstanceServerCertificatesSchema>,
  TImmutableDBKeys
>;
export type TKmipInstanceServerCertificatesUpdate = Partial<
  Omit<z.input<typeof KmipInstanceServerCertificatesSchema>, TImmutableDBKeys>
>;
