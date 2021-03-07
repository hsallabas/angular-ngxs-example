import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-emoji-modal",
  templateUrl: "./emoji-modal.component.html",
  styleUrls: ["./emoji-modal.component.scss"]
})
export class EmojiModalComponent implements OnInit {
  selectedEmoji: any;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EmojiModalComponent>
  ) {}

  ngOnInit(): void {}

  selectEmoji(emoji) {
    this.selectedEmoji = emoji;
  }

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close(this.selectedEmoji);
  }
}
