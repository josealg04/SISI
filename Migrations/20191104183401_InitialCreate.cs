using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SISI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TutorItems",
                columns: table => new
                {
                    Cedula = table.Column<long>(nullable: false),
                    TipoDocumento = table.Column<string>(nullable: true),
                    PrimerNombre = table.Column<string>(nullable: true),
                    SegundoNombre = table.Column<string>(nullable: true),
                    PrimerApellido = table.Column<string>(nullable: true),
                    SegundoApellido = table.Column<string>(nullable: true),
                    Genero = table.Column<string>(nullable: true),
                    FechaNacimiento = table.Column<DateTime>(nullable: false),
                    Direccion = table.Column<string>(nullable: true),
                    Telefono = table.Column<long>(nullable: false),
                    Email_Personal = table.Column<string>(nullable: true),
                    FechaIngreso = table.Column<DateTime>(nullable: false),
                    Programa = table.Column<string>(nullable: true),
                    Email_Institucional = table.Column<string>(nullable: true),
                    Cvlac = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TutorItems", x => x.Cedula);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TutorItems");
        }
    }
}
