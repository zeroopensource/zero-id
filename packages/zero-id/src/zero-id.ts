import { format } from "date-fns";
import { customAlphabet } from "nanoid";

const DEFAULT_PARTS_COUNT = 4;
const DEFAULT_PARTS_LENGTH = 6;
const DEFAULT_SEPARATOR = "-";
const DEFAULT_PREFIXES = ["zero", format(new Date(), "yyyyMMdd")];
const DEFAULT_ALPHABET = "1234567890abcdef";

interface GenerateZeroIdParams {
  /** x-x-x-x-x-x */
  partsCount?: number | null | undefined;
  /** xxxxxxx */
  partsLength?: number | null | undefined;
  prefixes?: string[] | null | undefined;
  separator?: string | null | undefined;
}

export const generateZeroId = (params?: GenerateZeroIdParams | undefined) => {
  const { prefixes, partsCount, partsLength, separator } = params || {};
  const keys = Array.from({ length: partsCount || DEFAULT_PARTS_COUNT }, () =>
    customAlphabet(DEFAULT_ALPHABET, partsLength || DEFAULT_PARTS_LENGTH)()
  );

  return [...(prefixes || DEFAULT_PREFIXES), ...keys].join(
    separator || DEFAULT_SEPARATOR
  );
};
