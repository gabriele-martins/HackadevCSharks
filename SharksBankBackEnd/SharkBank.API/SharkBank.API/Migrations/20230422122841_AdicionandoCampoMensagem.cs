using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SharkBank.API.Migrations
{
    /// <inheritdoc />
    public partial class AdicionandoCampoMensagem : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Usuarios_Contas_ContaId",
                table: "Usuarios");

            migrationBuilder.AlterColumn<int>(
                name: "ContaId",
                table: "Usuarios",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "Mensagem",
                table: "Transacoes",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Numero",
                table: "Contas",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AlterColumn<string>(
                name: "Agencia",
                table: "Contas",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddForeignKey(
                name: "FK_Usuarios_Contas_ContaId",
                table: "Usuarios",
                column: "ContaId",
                principalTable: "Contas",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Usuarios_Contas_ContaId",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "Mensagem",
                table: "Transacoes");

            migrationBuilder.AlterColumn<int>(
                name: "ContaId",
                table: "Usuarios",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Contas",
                keyColumn: "Numero",
                keyValue: null,
                column: "Numero",
                value: "");

            migrationBuilder.AlterColumn<string>(
                name: "Numero",
                table: "Contas",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.UpdateData(
                table: "Contas",
                keyColumn: "Agencia",
                keyValue: null,
                column: "Agencia",
                value: "");

            migrationBuilder.AlterColumn<string>(
                name: "Agencia",
                table: "Contas",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddForeignKey(
                name: "FK_Usuarios_Contas_ContaId",
                table: "Usuarios",
                column: "ContaId",
                principalTable: "Contas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
