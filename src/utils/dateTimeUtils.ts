import dayjs from "dayjs";
import "dayjs/locale/uz"; // Uzbek locale

// Set the locale globally
dayjs.locale("uz");

/**
 * Formats the time from an ISO string.
 * Example: "2024-12-20T23:20:00+03:00" -> "23:20"
 */
export function formatTime(isoString: string): string {
  try {
    const dateObject = dayjs(isoString);

    if (!dateObject.isValid()) {
      throw new Error("Invalid ISO string");
    }

    return dateObject.format("HH:mm"); // 24-hour clock format
  } catch (error: any) {  // Explicitly define error as any
    throw new Error(`Failed to format time: ${error.message}`);
  }
}

/**
 * Formats the date from an ISO string.
 * Example: "2024-12-20T23:20:00+03:00" -> "25 Dekabr, Ch, 2024y"
 */
export function formatDate(isoString: string): string {
  try {
    const dateObject = dayjs(isoString);

    if (!dateObject.isValid()) {
      throw new Error("Invalid ISO string");
    }

    return dateObject.format("DD MMMM, dd, YYYY[y]"); // Example: 25 Dekabr, Ch, 2024y
  } catch (error: any) {  // Explicitly define error as any
    throw new Error(`Failed to format date: ${error.message}`);
  }
}
